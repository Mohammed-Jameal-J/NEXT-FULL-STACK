import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import DefaultLayout from "./layouts/DefaultLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const User = lazy(() => import("./pages/User"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Component Loading</h1>} >
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

// and we can add suspense for particular pages too 

// import { Route, Routes } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import DefaultLayout from "./layouts/DefaultLayout";

// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const User = lazy(() => import("./pages/User"));
// const Login = lazy(() => import("./pages/Login"));

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<DefaultLayout />}>

//         <Route
//           index
//           element={
//             <Suspense fallback={<h2>🏠 Loading Home...</h2>}>
//               <Home />
//             </Suspense>
//           }
//         />

//         <Route
//           path="about"
//           element={
//             <Suspense fallback={<h2>ℹ️ Loading About...</h2>}>
//               <About />
//             </Suspense>
//           }
//         />

//         <Route
//           path="users/:id"
//           element={
//             <Suspense fallback={<h2>👤 Loading User...</h2>}>
//               <User />
//             </Suspense>
//           }
//         />

//         <Route
//           path="login"
//           element={
//             <Suspense fallback={<h2>🔐 Loading Login...</h2>}>
//               <Login />
//             </Suspense>
//           }
//         />

//       </Route>
//     </Routes>
//   );
// }

// export default App;

