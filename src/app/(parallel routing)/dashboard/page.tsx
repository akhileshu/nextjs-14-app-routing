import React from "react";

function page() {
  return <div>page - dashboard</div>;
}

/* 
for simple parallel streaming : can use multiple suspense 

but for complex streaming and loading data parallely , parallel routes are better 

we can extract components into parallel routes and each of them will have their own error,loading and other states just like a normal route page

conditional route rendering

advance routing -  handling navigation inside our parallel routes 
   <Link href={"/dashboard"}> dashboard</Link>
     <Link href={"/dashboard/settings"}> dashboard settings</Link>

      this will try to render the [sub route(settings)if exists] of all slots(posts,profile etc) 
      and the root of parallel route(dashboard) 

       on hard reload - if subroute/ segment doesn't exist - renders default.ts

       catch all route [...slug] is prioritised over default.ts
place default.ts 's code inside of catch all , when you want to render default.ts every time , not only on hard reload





*/

export default page;
