import { test }            from 'qunit'
import moduleForAcceptance from 'anonboard/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | create comment')

test('creating a comment works', async assert => {
  let topic  = server.create('topic')
  let thread = server.create('thread', { topic })

  await visit(`/t/${topic.identifier}/${thread.id}`)

  fillIn('textarea[name=comment]', 'test foo bar')

  await click('.save-comment')

  assert.equal($('.comment-list-item-header').length, 1)

  fillIn('textarea[name=comment]', 'test foo bar baz')

  await click('.save-comment')

  assert.equal($('.comment-list-item-header').length, 2)
})
