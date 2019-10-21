var mobilySms = require('mobily-sms')('al-jazeerapaints8','471596');


mobilySms.sendStatus(function(err,data){
    /*
     *This API provides you with the ability to check the sending process status in Mobily.ws,
     *so you know if you can send your SMS now or later.
     */

        if(err){
            console.log(err)
        }

        console.log(data);

  });

  mobilySms.sendSms('Hello there! How are you?',['919849944535'],'918309918184',function(error,data){
    /*
     * option is an optional attribute which will be an object
     * option can have the following attribute
     *  - domainName
     *    Your webiste url, by default www.mobily.ws will be taken
     *  - MsgID
     *    Random number that will be attached with the posting, just in case you want to send same message in less than one hour from the first one
     *    Mobily prevents recurrence send the same message within one hour of being sent, except in the case of sending a different value with each send operation
     *  - timeSend
     *    Determine the send time, 0 means send now
     *    Standard time format is hh:mm:ss
     *  - dateSend
     *    Determine the send date, 0 means send now
     *    Standard time format is mm:dd:yyyy
     *  - deleteKey
     *    Use this value to delete message using delete potal
     *    You can specify one number for group of messages to delete
     *  - lang
     *    When you send message without encoding you must sent Lang parameter with 3 as its value
     */
    /*
     *ErrorCode:0 => Not connect to server
     *ErrorCode:1 => SMS sent successfully
     *ErrorCode:2 => Your balance is 0
     *ErrorCode:3 => Your balance is not enough.
     *ErrorCode:4 => Invalid mobile number (or invalid username).
     *ErrorCode:5 => Invalid password.
     *ErrorCode:6 => SMS-API not responding, please try again.
     *ErrorCode:10 => SMS counts don’t match mobiles numbers count.
     *ErrorCode:13 => Mobile number is not active as a Sender Name.
     *ErrorCode:14 => Sender name is not active from Mobily.ws and mobile telecommunications companies
     *ErrorCode:15 => Mobile number(s) is not specified or incorrect.
     *ErrorCode:16 => Sender name is not specified.
     *ErrorCode:17 => Message text is not specified or not encoded properly with Mobily.ws Unicode.
     */
  });