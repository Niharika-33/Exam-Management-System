import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Eye } from "lucide-react";

const QuickActionCards = ({
  examType,
  onViewSyllabus,
  onViewDetails,
}) => {
  if (examType === "mid-semester") {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">View Syllabus</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mb-4">
              Check the syllabus published by faculty for your upcoming mid-semester exams.
            </p>
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full"
              onClick={() => onViewSyllabus("Mid-Semester")}
            >
              <Eye className="mr-1 h-3 w-3" /> View Syllabus
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Date Sheet & Seating</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mb-4">
              Check the date sheet and seating arrangements published by the exam department.
            </p>
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full"
              onClick={() => onViewDetails("Mid-Semester Exams")}
            >
              <Eye className="mr-1 h-3 w-3" /> View Details
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">View Details</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mb-4">
              Check the syllabus, date, and total marks published by faculty.
            </p>
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full"
              onClick={() => onViewDetails("CLAS Tests")}
            >
              <Eye className="mr-1 h-3 w-3" /> View Details
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default QuickActionCards;



// import React from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { BookOpen, Calendar, ClipboardList, Eye } from "lucide-react";

// const QuickActionCards = ({
//   examType,
//   onViewSyllabus,
//   onViewDetails,
//   onViewResults,
// }) => {
//   if (examType === "mid-semester") {
//     return (
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">View Syllabus</CardTitle>
//             <BookOpen className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-xs text-muted-foreground mb-4">
//               Check the syllabus published by faculty for your upcoming mid-semester exams.
//             </p>
//             <Button 
//               size="sm" 
//               variant="outline" 
//               className="w-full"
//               onClick={() => onViewSyllabus("Mid-Semester")}
//             >
//               <Eye className="mr-1 h-3 w-3" /> View Syllabus
//             </Button>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Date Sheet & Seating</CardTitle>
//             <Calendar className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-xs text-muted-foreground mb-4">
//               Check the date sheet and seating arrangements published by the exam department.
//             </p>
//             <Button 
//               size="sm" 
//               variant="outline" 
//               className="w-full"
//               onClick={() => onViewDetails("Mid-Semester Exams")}
//             >
//               <Eye className="mr-1 h-3 w-3" /> View Details
//             </Button>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">View Results</CardTitle>
//             <ClipboardList className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-xs text-muted-foreground mb-4">
//               View your mid-semester exam results published by faculty.
//             </p>
//             <Button 
//               size="sm" 
//               variant="outline" 
//               className="w-full"
//               onClick={() => onViewResults("Mid-Semester")}
//             >
//               <Eye className="mr-1 h-3 w-3" /> View Results
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   } else {
//     return (
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">View Details</CardTitle>
//             <BookOpen className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-xs text-muted-foreground mb-4">
//               Check the syllabus, date, and total marks published by faculty.
//             </p>
//             <Button 
//               size="sm" 
//               variant="outline" 
//               className="w-full"
//               onClick={() => onViewDetails("CLAS Tests")}
//             >
//               <Eye className="mr-1 h-3 w-3" /> View Details
//             </Button>
//           </CardContent>
//         </Card>
        
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">View Results</CardTitle>
//             <ClipboardList className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-xs text-muted-foreground mb-4">
//               View your class test results published by faculty.
//             </p>
//             <Button 
//               size="sm" 
//               variant="outline" 
//               className="w-full"
//               onClick={() => onViewResults("CLAS Tests")}
//             >
//               <Eye className="mr-1 h-3 w-3" /> View Results
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
// };

// export default QuickActionCards;
