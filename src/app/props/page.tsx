// import Link from 'next/link';
// export default function PropsDetail() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="max-w-4xl text-center">
//         <h1 className="text-4xl font-extrabold text-slate-400 mb-6">Understanding Props in React</h1>
//         <p className="text-white text-lg mb-6">
//           In React, <strong>props</strong> (short for &#39;properties&#39;) are a way to pass data from a <strong>parent component</strong> to a 
//           <strong> child component</strong>. They are <strong>read-only</strong> and cannot be modified by the child component. Props 
//           help make components reusable by allowing them to accept dynamic data.
//         </p>

//         <h2 className="text-2xl font-bold text-slate-400 mb-4">Key Features of Props</h2>
//         <ul className="text-white text-lg list-disc list-inside mb-6">
//           <li><strong>Immutable:</strong> Props cannot be changed by the receiving component; they are only for reading values.</li>
//           <li><strong>Dynamic Data Passing:</strong> You can pass any type of data, such as strings, numbers, objects, arrays, or even functions, to configure the child component.</li>
//           <li><strong>Unidirectional Data Flow:</strong> Data flows in one direction: from the parent component to the child component.</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-slate-400 mb-4">Why Use Props?</h2>
//         <p className="text-white text-lg mb-6">
//           Props allow you to customize components based on the data you provide and make components reusable by passing different data each time.
//         </p>

//         <h2 className="text-2xl font-bold text-slate-400 mb-4">Example:</h2>
//         <pre className="bg-zinc-950 text-white p-4 rounded mb-6 text-left">
//           {`function Button({ label, onClick }) {
//   return <button onClick={onClick}>{label}</button>;
// }

// function App() {
//   return (
//     <div>
//       <Button label="Click Me" onClick={() => alert("Button clicked!")} />
//     </div>
//   );
// }`}
//         </pre>
//         <p className="text-slate-400 text-lg mb-6">
//           In this example:
//           <ul className="list-disc list-inside text-white">
//             <li><strong>label:</strong> Passed as a prop to display text on the button.</li>
//             <li><strong>onClick:</strong> Passed as a prop to handle the button&#39;s click event.</li>
//           </ul>
//         </p>

//         <h2 className="text-2xl font-bold text-slate-400 mb-4">Comparison Between State and Props</h2>
//         <table className="w-full border-collapse border border-gray-400 text-white mb-6">
//           <thead>
//             <tr>
//               <th className="border border-gray-400 px-4 py-2">Feature</th>
//               <th className="border border-gray-400 px-4 py-2">Props</th>
//               <th className="border border-gray-400 px-4 py-2">State</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-400 px-4 py-2">Definition</td>
//               <td className="border border-gray-400 px-4 py-2">Passed from parent to child</td>
//               <td className="border border-gray-400 px-4 py-2">Managed within a component</td>
//             </tr>
//             <tr>
//               <td className="border border-gray-400 px-4 py-2">Mutability</td>
//               <td className="border border-gray-400 px-4 py-2">Immutable</td>
//               <td className="border border-gray-400 px-4 py-2">Mutable</td>
//             </tr>
//             <tr>
//               <td className="border border-gray-400 px-4 py-2">Scope</td>
//               <td className="border border-gray-400 px-4 py-2">Parent to child (read-only)</td>
//               <td className="border border-gray-400 px-4 py-2">Local to the component</td>
//             </tr>
//           </tbody>
//         </table>

//         <p className="text-white text-lg">
//           Using props is an essential part of building React applications as it helps in creating flexible and reusable components.
//         </p>
//       </div>

//       <Link href="/">
//         <button className="mt-6 px-6 py-2 bg- text-white font-bold rounded hover:bg-gray-700 transition duration-200">
//           Back to Home
//         </button>
//       </Link>
//     </main>
//   );
// }






import Link from "next/link";

export default function PropsDetail() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-400 mb-6">Understanding Props in React</h1>
        <p className="text-white text-base sm:text-lg lg:text-xl mb-6">
          In React, <strong>props</strong> (short for &#39;properties&#39;) are a way to pass data from a <strong>parent component</strong> to a
          <strong> child component</strong>. They are <strong>read-only</strong> and cannot be modified by the child component. Props
          help make components reusable by allowing them to accept dynamic data.
        </p>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-400 mb-4">Key Features of Props</h2>
        <ul className="text-white text-base sm:text-lg lg:text-xl list-disc list-inside mb-6">
          <li><strong>Immutable:</strong> Props cannot be changed by the receiving component; they are only for reading values.</li>
          <li><strong>Dynamic Data Passing:</strong> You can pass any type of data, such as strings, numbers, objects, arrays, or even functions, to configure the child component.</li>
          <li><strong>Unidirectional Data Flow:</strong> Data flows in one direction: from the parent component to the child component.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-400 mb-4">Why Use Props?</h2>
        <p className="text-white text-base sm:text-lg lg:text-xl mb-6">
          Props allow you to customize components based on the data you provide and make components reusable by passing different data each time.
        </p>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-400 mb-4">Example:</h2>
        <pre className="bg-zinc-950 text-white p-4 rounded mb-6 text-left">
          {`function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  return (
    <div>
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}`}
        </pre>
        <p className="text-slate-400 text-base sm:text-lg lg:text-xl mb-6">
          In this example:
        </p>
        <ul className="list-disc list-inside text-white text-base sm:text-lg lg:text-xl mb-6">
          <li><strong>label:</strong> Passed as a prop to display text on the button.</li>
          <li><strong>onClick:</strong> Passed as a prop to handle the button&#39;s click event.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-400 mb-4">Comparison Between State and Props</h2>
        <table className="w-full border-collapse border border-gray-400 text-white mb-6">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Feature</th>
              <th className="border border-gray-400 px-4 py-2">Props</th>
              <th className="border border-gray-400 px-4 py-2">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Definition</td>
              <td className="border border-gray-400 px-4 py-2">Passed from parent to child</td>
              <td className="border border-gray-400 px-4 py-2">Managed within a component</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Mutability</td>
              <td className="border border-gray-400 px-4 py-2">Immutable</td>
              <td className="border border-gray-400 px-4 py-2">Mutable</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Scope</td>
              <td className="border border-gray-400 px-4 py-2">Parent to child (read-only)</td>
              <td className="border border-gray-400 px-4 py-2">Local to the component</td>
            </tr>
          </tbody>
        </table>

        <p className="text-white text-base sm:text-lg lg:text-xl">
          Using props is an essential part of building React applications as it helps in creating flexible and reusable components.
        </p>
      </div>

      <Link href="/">
        <button className="mt-6 px-6 py-2 text-white font-bold rounded hover:bg-gray-700 transition duration-200">
          Back to Home
        </button>
      </Link>
    </main>
  );
}
