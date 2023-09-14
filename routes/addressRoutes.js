import express from 'express'
import { createAddress, updateAddress, deleteAddress, getAddress } from '../controllers/addressControllers.js'
const router1 = express.Router()


router1.route("/get").get(getAddress);
router1.route("/post").post(createAddress);
router1.route("/patch").patch(updateAddress);
router1.route("/delete").delete(deleteAddress);

export default router1


