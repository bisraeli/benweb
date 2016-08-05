import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const FormSubmits = new Mongo.Collection('FormsSubmits'); // creates collection

// const FORMSUBMITS_SCHEMA = {
//   name: { type: String },
//   email: {
//     type: String,
//     regEx: SimpleSchema.RegEx.Email,
//   },
//   phone: {
//     type: String,
//     regEx: /^[0-9０-９٠-٩۰-۹]{2}$|^[+＋]*(?:[-x‐-―−ー－-／  ­​⁠　()（）［］.\[\]/~⁓∼～*]*[0-9０-９٠-٩۰-۹]){3,}[-x‐-―−ー－-／  ­​⁠　()（）［］.\[\]/~⁓∼～0-9０-９٠-٩۰-۹]*(?:;ext=([0-9０-９٠-٩۰-۹]{1,7})|[  \t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\.．]?[  \t,-]*([0-9０-９٠-٩۰-۹]{1,7})#?|[- ]+([0-9０-９٠-٩۰-۹]{1,5})#)?$/i
//   }
//   message: { type: String }
// };
