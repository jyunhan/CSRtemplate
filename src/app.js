import path from 'path'
import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import favicon from 'serve-favicon'
import webpack from 'webpack'
import * as R from 'ramda'
import dotenv from 'dotenv'
import crypto from 'crypto'
import pageController from './page.config'
import webpackConfig from './webpack.config'

const envPath = R.equals(process.env.NODE_ENV, 'production') ? path.join(__dirname, '../.env') : path.join(__dirname, '../.env.development')
dotenv.config({ path: envPath })

const displayWebpackDetail = false
const app = express()
const env = process.env.NODE_ENV

// view engine setup
app.set('views', path.join(__dirname, '../public/views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../public')))

app.use(favicon(path.join(__dirname, '../public', 'images', 'icon.png')))

app.use('/', pageController)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// use webpack compile and package front end sources
const webpackEngine = webpack(webpackConfig)
const needPollWatch = !!R.equals(env, 'development')

webpackEngine.watch({
  aggregateTimeout: 300,
  poll: needPollWatch,
  ignored: /node_modules/
}, (err, status) => {
  if (displayWebpackDetail) { console.warn(status) }
  if (err) { console.warn(err) }
})

// export const application = app
export default app
