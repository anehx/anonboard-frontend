export default function() {
  this.transition(
    this.fromRoute('topic.index'),
    this.toRoute('topic.thread'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
