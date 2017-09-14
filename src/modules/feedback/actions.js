import store from 'store'

export function addFeedback(content) {
  /* Pretend we're calling an API
   * This would be something like:
   * fetch('host.example.com/api/feedbacks')
   *   .then(() => store.addFeedback({content})
   */
  setTimeout(() => {
    store.addFeedback({content})
  }, 500)
}
