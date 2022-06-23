import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import uploadDownload from "../../middleware/uploadDownload";

const router = Router()

router.post('/',uploadDownload.uploadFiles,indexCtrl.employeeCtrl.create)
router.get('/file/:filename',uploadDownload.showFile)
export default router