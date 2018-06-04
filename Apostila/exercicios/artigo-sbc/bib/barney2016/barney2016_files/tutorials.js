/******************************************************************************
* tutorials.js
*
* This library includes code that implements web page menus, footers, and other
* functions.
*
* Blaise M. Barney  blaiseb@llnl.gov
* Last revised: 01/09/2008
*******************************************************************************/

/******************************************************************************
* These section implements the mouse-over menu images 
* Note that these are no longer used and commented out
* Note also that if they are not commented out, they will result in 404 errors
* on web logs
* var menuOff_home = new Image();
* menuOff_home.src = "../images/menuOff_home.gif";
* var menuOn_home = new Image();
* menuOn_home.src = "../images/menuOn_home.gif";
*
* var menuOff_agenda = new Image();
* menuOff_agenda.src = "../images/menuOff_agenda.gif";
* var menuOn_agenda = new Image();
* menuOn_agenda.src = "../images/menuOn_agenda.gif";
*
* var menuOff_tutorials = new Image();
* menuOff_tutorials.src = "../images/menuOff_tutorials.gif";
* var menuOn_tutorials = new Image();
* menuOn_tutorials.src = "../images/menuOn_tutorials.gif";
*
* var menuOff_exercises = new Image();
* menuOff_exercises.src = "../images/menuOff_exercises.gif";
* var menuOn_exercises = new Image();
* menuOn_exercises.src = "../images/menuOn_exercises.gif";
*
* var menuOff_abstracts = new Image();
* menuOff_abstracts.src = "../images/menuOff_abstracts.gif";
* var menuOn_abstracts = new Image();
* menuOn_abstracts.src = "../images/menuOn_abstracts.gif";
*
* function act(imgName) {
*  document[imgName].src = eval("menuOn_" + imgName + ".src");
* }
*
* function inact(imgName) {
*  document[imgName].src = eval("menuOff_" + imgName + ".src"); 
* }
*******************************************************************************/



/******************************************************************************
* These section includes miscellaneous functions that are self explanatory.
* Some may not be used but may come in handy in the future.  
*******************************************************************************/
function PrintFooter(ucrl) {
  document.write("<P><HR><SPAN CLASS=footer>");
  document.write(document.location,"<BR>");
  document.write("Last Modified: ",document.lastModified," ");
  document.write("<A HREF=mailto:blaiseb@llnl.gov>blaiseb@llnl.gov</A>");
  document.write("<BR>",ucrl,"<P>");
  document.write("This work was performed under the auspices of the U.S. Department of Energy by Lawrence Livermore National Laboratory under Contract DE-AC52-07NA27344.</SPAN>");
  defaultStatus = document.location;
  }

function go_to(x) {
  if(top.window.navigation) {
    top.window.mainwindow.location = x.toc.options[x.toc.selectedIndex].value ; 
    document.tocform.reset();
    }
  }

function popUp(url) {
  HelperWindow=window.open('', '', 'toolbar=no,menubar=no,location=no,  \
    directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no');
  HelperWindow.location=url;
  HelperWindow.focus();
  }                        

function openWindow(url) {
  var thedate, randomname;
  thedate = new Date();
  randomname = thedate.getTime();
  NewWindow= window.open(url,randomname,'toolbar=yes,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600')
  }  

function resetTop(url) {
  document.write();
  top.location=url;
  }

function Answers(code) {

if (code == 'pthreads01') {
confirm ("ANSWER: \
Unless you are using the Pthreads scheduling mechanism, it is \
up to the implementation and/or operating system to decide where \
and when threads will execute.  Robust programs should not depend upon \
threads executing in a specific order or on a specific processor/core.")
}
else if (code == 'pthreads02') {
confirm ("ANSWER: \
Make sure that all passed data is thread safe - that it can not be \
changed by other threads.  The three examples that follow demonstrate \
what not and what to do.")
}
else if (code == 'pthreads03') {
confirm ("ANSWER: \
Unless thread priority scheduling (not covered) is used, the \
assignment will be left to the native system scheduler and may appear to \
be more or less random.")
}

else if (code == 'openMP01') {
confirm ("ANSWER: \
If there are more threads than sections, some threads will not \
execute a section and some will.  If there are more sections than \
threads, the implementation defines how the extra sections are \
executed.")
}
else if (code == 'openMP02') {
confirm ("ANSWER: \
It is up to the implementation to decide which threads will execute \
a section and which threads will not, and it can vary from execution \
to execution.")
}
else if (code == 'openMP03') {
confirm ("ANSWER: \
For both examples, alpha[3] should equal 3, and beta[3] is \
undefined or zero.  This is because only THREADPRIVATE variables \
can persist between successive parallel regions.")
}
else if (code == 'openMPex01') {
confirm ("EXPLANATION: \
This example attempts to show the use of the combined PARALLEL for-DO \
directive. It fails because the loop does not come immediately after \
the directive. Corrections include removing all statements between the \
PARALLEL for-DO directive and the actual loop. Also, logic is added to \
preserve the ability to query the thread id and print it from inside \
the loop. Notice the use of the FIRSTPRIVATE clause to intialize the \
flag.")
}
else if (code == 'openMPex02') {
confirm ("EXPLANATION: \
The bugs in this case are caused by neglecting to scope the TID \
and TOTAL variables as PRIVATE. By default, most OpenMP variables are \
scoped as SHARED. These variables need to be unique for each thread.")
}
else if (code == 'openMPex03') {
confirm ("EXPLANATION: \
The run time error is caused by by the OMP BARRIER directive \
in the PRINT_RESULTS subroutine. By definition, an OMP BARRIER \
can not be nested outside the static extent of a SECTIONS directive. \
In this case it is orphaned outside the calling SECTIONS block.")
}
else if (code == 'openMPex04') {
confirm ("EXPLANATION: \
OpenMP thread stack size is an implementation dependent resource. \
In this case, the array is too large to fit into the thread stack \
space and causes the segmentation fault.")
}
else if (code == 'openMPex05') {
confirm ("EXPLANATION: \
The problem in omp_bug5 is that the first thread acquires locka and \
then tries to get lockb before releasing locka. Meanwhile, the second \
thread has acquired lockb and then tries to get locka before releasing \
lockb. The solution overcomes the deadlock by using locks correctly.")
}
else if (code == 'openMPex06') {
confirm ("EXPLANATION: \
With orphaned directives, the correct scoping of variables is critical. \
The error occurs because the sum variable is scoped \
incorrectly. See the omp_orphan routine for one example of correct \
scoping. Note that there are other ways.")
}
else if (code == 'mpiex01') {
confirm ("EXPLANATION: \
mpi_bug1 demonstrates how miscoding even a simple parameter like a \
message tag can lead to a hung program. Verify that the message sent \
from task 0 is not exactly what task 1 is expecting. Matching the send \
tag with the receive tag solves the problem.")
}
else if (code == 'mpiex02') {
confirm ("EXPLANATION: \
mpi_bug2 shows another type of miscoding. The data type of the \
message sent by task 0 is not what task 1 expects. Nevertheless, the \
message is received, resulting in wrong results or abnormal \
termination - depending upon the MPI library and platform. \
Matching the send data type with the receive data type solves \
the problem.")
}
else if (code == 'mpiex03') {
confirm ("EXPLANATION: \
mpi_bug3 shows what happens when the MPI environment is not initialized \
or terminated properly. Inserting the MPI init and finalize calls in \
the right locations will solve the problem.")
}
else if (code == 'mpiex04') {
confirm ("EXPLANATION: \
mpi_bug4 shows what happens when a task does not participate in a \
collective communication call. In this case, task 0 needs to call \
MPI_Reduce as the other tasks do.")
}
else if (code == 'mpiex05') {
confirm ("EXPLANATION: \
mpi_bug5 demonstrates an unsafe program, because sometimes it will \
execute fine, and other times it will fail. The reason why the program \
fails or hangs is due to buffer \
exhaustion on the receiving task side, as a consequence of the way \
an MPI library has implemented an eager protocol for \
messages of a certain size.  \
One possible solution is to include an MPI_Barrier call in  \
the both the send and receive loops.")
}
else if (code == 'mpiex06') {
confirm ("EXPLANATION: \
mpi_bug6 has a bug that will terminate the program in some cases \
but be ignored in other cases. The problem is that task 2 performs a \
blocking operation, but then hits the MPI_Wait call near the end of \
the program. Only the tasks that make non-blocking calls should hit \
the MPI_Wait. The coding error in this case is easy to fix - simply \
make sure task 2 does not encounter the MPI_Wait call.")
}
else if (code == 'mpiex07') {
confirm ("EXPLANATION: \
mpi_bug7 performs a collective communication broadcast but erroneously \
codes the count argument incorrectly resulting in a hang condition.")
}
else if (code == 'mpiex08') {
confirm ("EXPLANATION: \
Communications performed on-node occur in shared memory, not over the \
network. On LC's older hardware they are usually faster. On LC's newer \
hardware with an Omni-Path switch, network communications are faster.")
}
else if (code == 'mpiex09') {
confirm ("EXPLANATION: \
Non-blocking send/receive operations are often significantly faster than \
blocking send/receive operations.")
}
else if (code == 'pthreadex01') {
confirm ("EXPLANATION: \
The header comments in bug1.c explain the problem. More than one thread \
is waiting for a condition signal, but only one is sent. The solution \
overcomes this by using a condition signal broadcast.")
}
else if (code == 'pthreadex02') {
confirm ("EXPLANATION: \
The bug2.c program seg faults because it has exhausted the default \
thread stack space. The bug2fix.c program shows how to overcome this \
by explicitly setting an adequate thread stack size.")
}
else if (code == 'pthreadex03') {
confirm ("EXPLANATION: \
bug3.c shows an unsafe way to pass the argument parameter in the \
pthread_create routine. It passes the address of t, rather than the \
value. As a result, each thread looks at the same location for their \
supposed unique instance of t. By the times the threads start, the \
thread creation loop is done and t is equal to 8 - usually. This means \
each thread gets an invalid and non-unique value for t. Compare with \
hello_arg1.c for one coorect way of passing t.")
}  
else if (code == 'pthreadex04') {
confirm ("EXPLANATION: \
bug4.c demonstrates a synchronization problem because the condition \
signal gets sent before the condition wait is posted. Plus, the waiting \
thread does not check to see if the condition it needs is true or not. So \
it blindly calls the condition wait and will hang forever. The solution \
bug4fix.c shows one way of overcoming this problem.")
}  
else if (code == 'pthreadex05') {
confirm ("EXPLANATION: \
bug5.c is simply missing a pthread_exit call at the end of main. As a \
result, when main finishes, it goes away as do all of its threads. \
Adding a pthread_exit routine at the end of main will solve the problem.")
}  
else if (code == 'pthreadex06') {
confirm ("EXPLANATION: \
bug6.c shows how shared memory can be misused by multiple threads. All \
are attempting to update the global sum at the same time without any \
synchronization mechanism. As a result, the answer will almost always \
vary and be wrong. Using a mutex variable around the update of the \
global sum variable will solve this problem. The solution bug6fix.c \
shows one way to do this, but dotprod_mutex.c shows a more efficient \
way to accomplish this.")
}  
else if (code == 'totalview01') {
confirm ("FACTOID: \
Some of BBNs notable developments in the field of computer networks are the \
implementation and operation of the ARPANET; the first person-to-person network \
email sent and the use of the @ sign in an email address; the first Internet \
protocol router; the Voice Funnel, an early predecessor of voice over IP; \
and work on the development of TCP. Other well-known BBN computer-related \
innovations include the first time-sharing system, the LOGO programming language, \
the TOPS-20 operating system, the Colossal Cave Adventure game, \
the first link-state routing protocol, and a series of mobile ad-hoc networks \
starting in the 1970s. BBN also is well known for its parallel computing systems, \
including the Pluribus, and the BBN Butterfly computers, which have been used for \
such tasks as warfare simulation for the U.S. Navy. Source: wikipedia.org")
}

}

function addNavigation() {
  document.write(" \
  <table border=0><tr align=center valign=center>  \
  <td><font size=-1 face=arial>  \
  <a href=../../training#training_materials>Tutorials</a></b></font></td>  \
  <td><b>|</b></td> \
  <td><font size=-1 face=arial>  \
  <a href=../exercises/index.html>Exercises</a></b></font></td>  \
  <td><b>|</b></td> \
  <td><font size=-1 face=arial>  \
  <a href=../abstracts/index.html>Abstracts</a></b></font></td>  \
  <td><b>|</b></td> \
  <td><font size=-1 face=arial>  \
  <a href=../../training#workshops>LC&nbsp;Workshops</a></b></font></td>  \
  <td><b>|</b></td> \
  <td><font size=-1 face=arial>  \
  <a href=../misc/comments.html>Comments</a></b></font></td>  \
  <td><b>|</b></td> \
  <td><font size=-1 face=arial>  \
  <a href=../search/index.html>Search</a></font></td>  \
  <td><b>|</b></td> \
  <td><font size=-1 face=arial> \
  <a href=http://www.llnl.gov/disclaimer.html target=W2> \
  Privacy & Legal Notice</a></font></td> \
  </tr></table>   ");
  }

