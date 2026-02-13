"use client";
import { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

export default function Fortune() {
  const initialSegments = [
    "10K",
    "20K",
    "50K",
    "100K",
    "Special",
    "20K",
    "10K",
    "10K",
    "200K",
    "500K",
    "10K",
    "20K",
    "10",
    "10K",
    "30K",
    "50K",
    "10K",
    "0",
  ];

  const segColors = [
    "#cd4548",
    "#1691d4",
    "#62b48c",
    "#ffa20f",
    "#7b6bb7",
    "#909a8c",
    "#7a1f1f",
    "#d1a365",
    "#114a96",
    "#cd4548",
    "#1691d4",
    "#62b48c",
    "#ffa20f",
    "#7b6bb7",
    "#909a8c",
    "#7a1f1f",
    "#d1a365",
    "#114a96",
  ];

  const [segments, setSegments] = useState(initialSegments);
  const [enteredName, setEnteredName] = useState("");
  const [spunWinner, setSpunWinner] = useState(null);
  const [selections, setSelections] = useState([]);

  const onFinished = (winner) => {
    if (!segments.includes(winner)) {
      console.log(`Winner: ${winner} has already been picked.`);
      return;
    }

    const updatedSegments = segments.filter((segment) => segment !== winner);
    setSegments(updatedSegments);

    setSelections((prevSelections) => [
      ...prevSelections,
      { username: enteredName, selection: winner },
    ]);
    console.log(`Winner: ${winner}, Picked by: ${enteredName}`);
    setSpunWinner(winner);
  };

  return (
    <div className="flex z-50 fixed top-0 w-full flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Spin the Fortune Wheel!
      </h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-fit ">
        <input
          type="text"
          placeholder="Enter your name"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
        />
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="blue"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          winningSegment="500K"
          size={200}
          upDuration={20}
          downDuration={15000}
          fontFamily="Helvetica"

        />
        {spunWinner && (
          <h2 className="text-xl font-semibold mt-4">
            Winner: {spunWinner}, Picked by: {enteredName}
          </h2>
        )}
      </div>

      <h3 className="text-2xl font-semibold mt-8">Selections:</h3>
      <ul className="mt-4 w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-md">
        {selections.map((selection, index) => (
          <li
            key={index}
            className="p-2 border-b border-gray-700 last:border-none"
          >
            {selection.username} picked{" "}
            <span className="font-bold text-yellow-400">
              {selection.selection}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
