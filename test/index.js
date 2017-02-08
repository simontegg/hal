var test = require('tape')
var Hal = require('../scripts/hal')
var _ = require('lodash')

// fake robot
const Robot = function (response) {
  const responders = []
  const hearers = []

  return {
    respond: function (regex, listener) {
      responders.push({ regex: regex, listener: listener })
    },

    hear: function (regex, listener) {
      hearers.push({ regex: regex, listener: listener })
    },

    at: function (string) {
      _.each(responders, (cmd) => {
        if (string.match(cmd.regex)) {
          cmd.listener(response)
        }
      })
    },
    
    inRoom: function (string) {
      _.each(hearers, (cmd) => {
        if (string.match(cmd.regex)) {
          cmd.listener(response)
        }
      })
    }

  }
}

test('responds like a creepy ai', (t) => {
  const expected = "I'm sorry simon..."
  const expected2 = "I'm afraid I can't do that"
  let call = 0

  const res = { 
    send: function (message) {
      if (call === 0) {
        t.equals(message, expected)
        call ++
      } else {
        t.equals(message, expected2)
        t.end()
      }
    },

    message: { user: {profile: { first_name: "simon" } }}
  }

  const robot = Robot(res)
  const hal = Hal(robot)

  // action
  robot.at("open the pod bay doors")


})







