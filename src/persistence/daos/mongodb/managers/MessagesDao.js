import { msgModel } from "../models/MessagesModel.js";

export default class MessagesDao {

  async getAll() {
    try {
      const response = await msgModel.find({});
      return response;
    } catch (error) {
      console.log(error);
      throw new Error (error.message);
    }
  }

  async createMsg(msg) {
    try {
      const response = await msgModel.create(msg);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error (error.message);
    }
  }

  async getById(id) {
    try {
      const response = await msgModel.findById(id);
      return response;
    } catch (error) {
      console.log (error);
      throw new Error (error.message);
    }
  }

  async updateMsg(id, update) {
    try {
      const response = await msgModel.updateOne ({id: id}, update);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error (error.message);
    }
  }

  async deleteMsg(id) {
    try {
      const response = await msgModel.findByIdAndDelete (id);
      return response;
    } catch (error) {
      console.log (error);
      throw new Error (error.message);
    }
  }

  async deleteMsgs() {
    try {
      const response = await msgModel.deleteMany ();
    } catch (error) {
      throw new Error (error.message);
    }
  }

};


