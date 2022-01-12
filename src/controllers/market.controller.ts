import {MarketService} from "../services/market.service";
import {catchAsync} from "../utils/catchAsync";
import {Market} from "../models/market/Market";

const getCodes = catchAsync(async (req, res) => {
    const r: Market[] = await MarketService.getCodes();
    res.send(r);
});

export {getCodes}