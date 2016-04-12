export default function() {
  this.transition(
    this.fromRoute('topic.index'),
    this.toRoute('topic.thread'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('topic.index'),
    this.toRoute('topic.new'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('topic.thread'),
    this.toRoute('topic.new'),
    this.use('crossFade')
  )
}
