import {AccountService} from "../services/account.service";
import {catchAsync} from "../utils/catchAsync";
import {Account} from "../models/account/Account";

const getAccounts = catchAsync(async (req, res) => {
    const r: Account = await AccountService.getAccounts()
    res.send(r);
});

export {getAccounts}