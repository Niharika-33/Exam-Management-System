import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle } from "lucide-react";
import { renderExamResult } from "@/utils/examUtils";

const ExamList = ({
  title,
  description,
  examList,
  activeSubTab,
  onSubTabChange,
  onViewSyllabus,
  onViewAnswerKey,
  showAnswerKey = false,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Tabs defaultValue="upcoming" value={activeSubTab} onValueChange={onSubTabChange}>
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{title === "CLAS Test Schedule" ? "Test" : "Subject"}</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {examList.length > 0 ? (
              examList.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell>
                    <div className="font-medium">{exam.subject}</div>
                    <div className="text-sm text-muted-foreground">{exam.code}</div>
                  </TableCell>
                  <TableCell>
                    {exam.date}
                    <div className="text-sm text-muted-foreground">{exam.time}</div>
                  </TableCell>
                  <TableCell>{exam.venue}</TableCell>
                  <TableCell>
                    {exam.status === "Upcoming" ? (
                      <Badge variant="outline" className="bg-blue-100 text-blue-700 border-none">
                        {exam.status}
                      </Badge>
                    ) : (
                      <>
                        <Badge variant="outline" className="bg-green-100 text-green-700 border-none">
                          {exam.status}
                        </Badge>
                        {renderExamResult(exam) && (
                          <div className="text-sm font-medium mt-1">{renderExamResult(exam)}</div>
                        )}
                      </>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {exam.status === "Upcoming" ? (
                        <>
                          <Button 
                            size="xs" 
                            variant="outline"
                            onClick={() => onViewSyllabus(exam.subject)}
                          >
                            <BookOpen className="h-3 w-3" /> Syllabus
                          </Button>
                        </>
                      ) : (
                        <>
                          {showAnswerKey && onViewAnswerKey && (
                            <Button 
                              size="xs" 
                              variant="outline"
                              onClick={() => onViewAnswerKey(exam.subject)}
                            >
                              <CheckCircle className="h-3 w-3" /> Answer Key
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                  No exams found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ExamList;
// import React from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { 
//   Card, 
//   CardContent, 
//   CardDescription, 
//   CardHeader, 
//   CardTitle 
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { BookOpen, Eye, CheckCircle } from "lucide-react";
// import { renderExamResult } from "@/utils/examUtils";

// const ExamList = ({
//   title,
//   description,
//   examList,
//   activeSubTab,
//   onSubTabChange,
//   onViewSyllabus,
//   onViewResults,
//   onViewAnswerKey,
//   showAnswerKey = false,
// }) => {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//         <Tabs defaultValue="upcoming" value={activeSubTab} onValueChange={onSubTabChange}>
//           <TabsList>
//             <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
//             <TabsTrigger value="completed">Completed</TabsTrigger>
//           </TabsList>
//         </Tabs>
//       </CardHeader>
//       <CardContent>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>{title === "CLAS Test Schedule" ? "Test" : "Subject"}</TableHead>
//               <TableHead>Date & Time</TableHead>
//               <TableHead>Venue</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {examList.length > 0 ? (
//               examList.map((exam) => (
//                 <TableRow key={exam.id}>
//                   <TableCell>
//                     <div className="font-medium">{exam.subject}</div>
//                     <div className="text-sm text-muted-foreground">{exam.code}</div>
//                   </TableCell>
//                   <TableCell>
//                     {exam.date}
//                     <div className="text-sm text-muted-foreground">{exam.time}</div>
//                   </TableCell>
//                   <TableCell>{exam.venue}</TableCell>
//                   <TableCell>
//                     {exam.status === "Upcoming" ? (
//                       <Badge variant="outline" className="bg-blue-100 text-blue-700 border-none">
//                         {exam.status}
//                       </Badge>
//                     ) : (
//                       <>
//                         <Badge variant="outline" className="bg-green-100 text-green-700 border-none">
//                           {exam.status}
//                         </Badge>
//                         {renderExamResult(exam) && (
//                           <div className="text-sm font-medium mt-1">{renderExamResult(exam)}</div>
//                         )}
//                       </>
//                     )}
//                   </TableCell>
//                   <TableCell className="text-right">
//                     <div className="flex justify-end gap-2">
//                       {exam.status === "Upcoming" ? (
//                         <>
//                           <Button 
//                             size="xs" 
//                             variant="outline"
//                             onClick={() => onViewSyllabus(exam.subject)}
//                           >
//                             <BookOpen className="h-3 w-3" /> Syllabus
//                           </Button>
//                         </>
//                       ) : (
//                         <>
//                           <Button 
//                             size="xs" 
//                             variant="outline"
//                             onClick={() => onViewResults(exam.subject)}
//                           >
//                             <Eye className="h-3 w-3" /> Result
//                           </Button>
//                           {showAnswerKey && onViewAnswerKey && (
//                             <Button 
//                               size="xs" 
//                               variant="outline"
//                               onClick={() => onViewAnswerKey(exam.subject)}
//                             >
//                               <CheckCircle className="h-3 w-3" /> Answer Key
//                             </Button>
//                           )}
//                         </>
//                       )}
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
//                   No exams found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// };

// export default ExamList;
