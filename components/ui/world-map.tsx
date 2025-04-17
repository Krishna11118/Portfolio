// ---------------------------------------------with connection lines

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  locations?: Array<{
    latitude: number;
    longitude: number;
    city?: string;
  }>;
  lineColor?: string;
}

export default function WorldMap({
  locations = [],
  lineColor = "#0ea5e9",
  // lineColor = "#ffffff",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#FFFFFF40",
    shape: "circle",
    backgroundColor: "black",
  });

  const projectPoint = (lat: number, lng: number) => {
    const width = 800;
    const height = 400;

    const x = ((lng + 180) / 360) * width;
    const y = ((90 - lat) / 160) * height;

    return { x, y };
  };


  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const locationGroups = locations.reduce((acc, loc, index) => {
    const key = `${loc.latitude},${loc.longitude}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({ ...loc, originalIndex: index });
    return acc;
  }, {} as Record<string, Array<{ latitude: number; longitude: number; city?: string; originalIndex: number }>>);

  const pointsWithOffsets = Object.entries(locationGroups).flatMap(
    ([key, group]) =>
      group.map((loc, i) => {
        const point = projectPoint(loc.latitude, loc.longitude);
        const offset = group.length > 1
          ? {
            x: Math.cos((i / group.length) * 2 * Math.PI) * 5,
            y: Math.sin((i / group.length) * 2 * Math.PI) * 5,
          }
          : { x: 0, y: 0 };
        const labelOffsetY = i * 15 - (group.length - 1) * 7.5;
        return {
          ...loc,
          point: { x: point.x + offset.x, y: point.y + offset.y },
          labelY: point.y + offset.y + labelOffsetY,
        };
      })
  );

  const connections = pointsWithOffsets
    .slice(0, -1)
    .map((startLoc, i) => ({
      start: startLoc.point,
      end: pointsWithOffsets[i + 1].point,
    }));

  return (
    <div className="w-full  aspect-[2/1] bg-black rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {connections.map((conn, i) => (
          <g key={`path-group-${i}`}>
            <motion.path
              d={createCurvedPath(conn.start, conn.end)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: 0.5 * i,
                ease: "easeOut",
              }}
            />
          </g>
        ))}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {pointsWithOffsets.map((loc, i) => (
          <g key={`point-${loc.originalIndex}`}>
            <circle cx={loc.point.x} cy={loc.point.y} r="2" fill={lineColor} />
            <circle
              cx={loc.point.x}
              cy={loc.point.y}
              r="2"
              fill={lineColor}
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="2"
                to="8"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>

            {loc.city === "Me" && (
              <text
                x={loc.point.x + 5}
                y={loc.labelY}
                fill="white"
                fontSize="10"
                className="pointer-events-none text-[6px]  select-none"
              >
                {loc.city}
              </text>
            )}

          </g>
        ))}
      </svg>
    </div>
  );
}

//---------------------------------------------without connection lines
// "use client";

// import { useRef } from "react";
// import { motion } from "framer-motion";
// import DottedMap from "dotted-map";
// import Image from "next/image";

// interface MapProps {
//   locations?: Array<{
//     latitude: number;
//     longitude: number;
//     city?: string;
//   }>;
//   lineColor?: string;
// }

// export default function WorldMap({
//   locations = [],
//   lineColor = "#0ea5e9",
// }: MapProps) {
//   const svgRef = useRef<SVGSVGElement>(null);
//   const map = new DottedMap({ height: 100, grid: "diagonal" });

//   const svgMap = map.getSVG({
//     radius: 0.22,
//     color: "#FFFFFF40",
//     shape: "circle",
//     backgroundColor: "black",
//   });

//   const projectPoint = (lat: number, lng: number) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };

//   const locationGroups = locations.reduce((acc, loc, index) => {
//     const key = `${loc.latitude},${loc.longitude}`;
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push({ ...loc, originalIndex: index });
//     return acc;
//   }, {} as Record<string, Array<{ latitude: number; longitude: number; city?: string; originalIndex: number }>>);

//   const pointsWithOffsets = Object.entries(locationGroups).flatMap(
//     ([key, group]) =>
//       group.map((loc, i) => {
//         const point = projectPoint(loc.latitude, loc.longitude);
//         const offset = group.length > 1
//           ? {
//               x: Math.cos((i / group.length) * 2 * Math.PI) * 5,
//               y: Math.sin((i / group.length) * 2 * Math.PI) * 5,
//             }
//           : { x: 0, y: 0 };
//         const labelOffsetY = i * 15 - (group.length - 1) * 7.5;
//         return {
//           ...loc,
//           point: { x: point.x + offset.x, y: point.y + offset.y },
//           labelY: point.y + offset.y + labelOffsetY,
//         };
//       })
//   );

//   return (
//     <div className="w-full aspect-[2/1] bg-black rounded-lg relative font-sans">
//       <Image
//         src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//         className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//         alt="world map"
//         height={495}
//         width={1056}
//         draggable={false}
//       />
//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 pointer-events-none select-none"
//       >
//         {pointsWithOffsets.map((loc, i) => (
//           <g key={`point-${loc.originalIndex}`}>
//             <circle cx={loc.point.x} cy={loc.point.y} r="2" fill={lineColor} />
//             <circle
//               cx={loc.point.x}
//               cy={loc.point.y}
//               r="2"
//               fill={lineColor}
//               opacity="0.5"
//             >
//               <animate
//                 attributeName="r"
//                 from="2"
//                 to="8"
//                 dur="1.5s"
//                 begin="0s"
//                 repeatCount="indefinite"
//               />
//               <animate
//                 attributeName="opacity"
//                 from="0.5"
//                 to="0"
//                 dur="1.5s"
//                 begin="0s"
//                 repeatCount="indefinite"
//               />
//             </circle>
//             {/* Uncomment to show city labels */}
//             {/* {loc.city && (
//               <text
//                 x={loc.point.x + 5}
//                 y={loc.labelY}
//                 fill="white"
//                 fontSize="10"
//                 className="pointer-events-none select-none"
//               >
//                 {loc.city}
//               </text>
//             )} */}
//           </g>
//         ))}
//       </svg>
//     </div>
//   );
// }