import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// creates collection
export const Contact = new Mongo.Collection('Contact'); 
