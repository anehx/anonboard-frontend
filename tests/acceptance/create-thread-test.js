import { test }            from 'qunit'
import moduleForAcceptance from 'anonboard/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | create thread')

test('navigating to a topic works', async assert => {
  let topic = server.create('topic')

  await visit('/')
  await click('.side-nav-list-item a')

  assert.equal(currentURL(), `/t/${topic.identifier}`)
})

test('navigating to new thread form works', async assert => {
  let topic = server.create('topic')

  await visit(`/t/${topic.identifier}`)

  await click('button.new-thread')

  assert.equal(currentURL(), `/t/${topic.identifier}/new`)
})

test('navigating to new thread form works', async assert => {
  let topic = server.create('topic')

  await visit(`/t/${topic.identifier}/new`)

  fillIn('input[name=title]', 'Some Test Thread')
  fillIn('textarea[name=content]', 'foo bar baz')

  await click('button.save-thread')

  assert.equal(currentURL(), `/t/${topic.identifier}/1`)
})
