import * as express from "express";
import * as mongoose from "mongoose";

export const sendJSONResponse = (res: express.Response, status, success, dataOrError?, message?) => {
  const response: any = {
    success
  };
  if (success) {
    response.data = dataOrError;
  } else {
    response.error = dataOrError;
  }
  if (message) {
    response.message = message;
  }
  res.status(status).json(response);
};

function removeSensitiveProps(object: any) {
  delete object.password;
  console.log(object);
  return object;
}

export function saveModelAndSendResponse(currentModel: mongoose.Model<any>, details: any, res: express.Response) {
  const instance = new currentModel(details);
  instance.save().then((savedInstance) => {
    sendJSONResponse(res, 200, true, removeSensitiveProps(savedInstance.toObject()));
  }).catch((e) => {
    console.log(e);
    sendJSONResponse(res, 400, false, e);
  });
}

export async function updateModelAndSendResponse(
  Model: mongoose.Model<any>,
  updateID: string, updateDetails: any, res: express.Response) {
  try {
    const model = await Model.findByIdAndUpdate(updateID, updateDetails, { new: true });
    if (model) {
      sendJSONResponse(res, 200, true, removeSensitiveProps(model.toObject()));
    } else {
      sendJSONResponse(res, 400, false, "Could not update the given instance");
    }
  } catch (e) {
    sendJSONResponse(res, 400, false, "Could not update the given instance");
  }
}

export async function removeModelByIdAndRespond(Model: mongoose.Model<any>, id: string, res: express.Response) {
  try {
    const fields = await Model.findByIdAndRemove(id, { select: "_id" });
    if (fields) {
      sendJSONResponse(res, 200, true, fields);
    } else {
      sendJSONResponse(res, 400, false, "Could not delete the given instance");
    }
  } catch (e) {
    sendJSONResponse(res, 400, false, "Could not delete the given instance");
  }
}

export async function getAllModels(Model: mongoose.Model<any>, res: express.Response) {
  try {
    const items = await Model.find().exec();
    if (items && items.length >= 0) {
      sendJSONResponse(res, 200, true, items);
    } else {
      throw new Error("Not Found");
    }
  } catch (e) {
    sendJSONResponse(res, 400, false, "Something went wrong while getting items");
  }
}

export async function getModelById(Model: mongoose.Model<any>, id: string, res: express.Response) {
  try {
    const item = await Model.findById(id).exec();
    if (item) {
      sendJSONResponse(res, 200, true, item);
    } else {
      throw new Error("Not Found");
    }
  } catch (e) {
    sendJSONResponse(res, 400, false, "Something went wrong while getting item");
  }
  sendJSONResponse(res, 400, false, "Something went wrong while getting items");
}