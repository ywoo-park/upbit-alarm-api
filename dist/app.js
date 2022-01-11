"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_errors_1 = (0, tslib_1.__importDefault)(require("http-errors"));
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const cookie_parser_1 = (0, tslib_1.__importDefault)(require("cookie-parser"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const v1_1 = require("./src/routes/v1");
const users_route_1 = require("./src/routes/v1/users.route");
const account_route_1 = require("./src/routes/v1/account.route");
const market_route_1 = require("./src/routes/v1/market.route");
const auth_router_1 = require("./src/routes/v1/auth.router");
const app = (0, express_1.default)();
// view engine setup
app.set('views', path_1.default.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', v1_1.indexRouter);
app.use('/users', users_route_1.userRouter);
app.use('/auth', auth_router_1.authRouter);
app.use('/accounts', account_route_1.accountRouter);
app.use('/market', market_route_1.marketRouter);
// catch 404 and forward to error handler
// @ts-ignore
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
// @ts-ignore
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
//# sourceMappingURL=app.js.map