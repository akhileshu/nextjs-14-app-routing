import React, { use } from 'react'
import StreamUi, { StreamItem } from '../../../components/StreamUi'
import {throwError, wait} from '../../../utilities/functions'

function page() {
  // throwError() /* trigger error.js */
  // use(wait(1000)) /* trigger Loading.js on reload/first render */
  return <StreamUi/> /* using suspense and ErrorBoundary internally */
}

export default page