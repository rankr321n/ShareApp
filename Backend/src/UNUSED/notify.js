const notifier = require('node-notifier');

// String
// notifier.notify('Go empty the dishwasher!');

// Object
notifier.notify({
  'title': 'Friend Request sent',
  'subtitle': 'Daily Maintenance',
  'message': 'You have Sent a friend request',
  
  'wait': true
});