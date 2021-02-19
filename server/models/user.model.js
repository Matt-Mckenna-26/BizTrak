const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//define all Schemas nested inside a User document including contacts, meetings, organizations and tasks******

const TaskSchema = new mongoose.Schema({
	title:{
		type: String,
		required: [true, 'A Task must have a title']
	},
	dueDate:{
		type: Date,
		required: [true, 'Task must have a due date']
	},
	notes:{
		type:String,
		maxLength: [500, 'Notes cannot exceed 500 chars']
	}
}, {timeStamps: true})


const ContactSchema = new mongoose.Schema({
	firstName: {
		type:String,
		required: [true, 'first name is required']
	},
	lastName: {
		type: String,
		required: [true, 'Last name is required']
	},
	position: {
		type:String,
		required: [true, 'Position is required']
	},
	email:{
		type:String,
		maxLength: [40, 'Email cannot exceed 20 chars']
	},
	phone: {
		type:String,
		maxLength: [15, 'phone number too long']
	},
	notes:{
		type:String,
		maxLength: [500, 'Notes cannot exceed 500 chars']
	}
})




const MeetingSchema = new mongoose.Schema({
	title: {
		type:String,
		required: [true, 'meeting title is required']
	},
	time: {
		type: Date,
		required: [true, 'meeting time is required']
	},
	attendees: {
		type: Array
	}
	,
	notes:{
		type:String,
		maxLength: [500, 'Notes cannot exceed 500 chars']
	}
})

const OrganizationSchema = new mongoose.Schema({
	name: {
		type:String,
		required: [true, 'Company name is required']
	},
	address: {
		type: String,
		required: [false]
	},
	contacts: {
		type:Array
	}
	,
	email:{
		type:String,
		maxLength: [20, 'Email cannot exceed 20 chars']
	},
	phone: {
		type:String,
		maxLength: [15, 'phone number too long']
	},
	notes:{
		type:String,
		maxLength: [500, 'Notes cannot exceed 500 chars']
	}
})

// Defines the User Schema containing nested schemas (tasks, meetings etc) to create the Users document

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"]
	},
	email : {
		type: String ,
		required: [true, 'Email address is required']
	},
	password : {
		type: String ,
		required : [true, "Password is required"],
		minlength: [8, "Password must be at least 8 characters"]
	},
	tasks : [TaskSchema], 

	meetings: [MeetingSchema],

	contacts: [ContactSchema],

	organizations: [OrganizationSchema]
	},{timestamps: true}
);

//Creates a 'virtual' fiel in the user schema for confirm password and validate that this matches the password field
UserSchema.virtual("confirmPassword")
	.get(() => this._confirmPassword)
	.set(value => (this._confirmPassword = value));

UserSchema.pre("validate", function(next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate("confirmPassword", "Password must match confirm password!")
	}
	next();
});


//Will use bcrypt to hash the password bfore saving it to the database

UserSchema.pre("save" , function(next) {
	bcrypt
	.hash(this.password, 10)
	.then(hash => {
		this.password = hash;
		next();
	})
});



const User = mongoose.model("User", UserSchema);

module.exports = User;
