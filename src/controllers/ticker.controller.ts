import {catchAsync} from "../utils/catchAsync";
import {TickerService} from "../services/ticker.service";

const getTicker = catchAsync(async (req, res) => {
    const code = req.query.code;
    const r = await TickerService.getTicker(code);
    res.send(r);
});

export {getTicker}