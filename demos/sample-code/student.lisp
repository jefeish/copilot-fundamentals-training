;;;; Student Training System in Common Lisp


(defclass student ()
  ((id :initarg :id :accessor student-id)
   (name :initarg :name :accessor student-name)
   (courses :initform () :accessor student-courses)))


(defclass course ()
  ((id :initarg :id :accessor course-id)
   (name :initarg :name :accessor course-name)
   (students :initform () :accessor course-students)
   (grades :initform () :accessor course-grades)))


(defclass training-system ()
  ((students :initform () :accessor system-students)
   (courses :initform () :accessor system-courses)))


(defmethod add-student ((system training-system) (student student))
  (push student (slot-value system 'students)))

(defmethod add-course ((system training-system) (course course))
  (push course (slot-value system 'courses)))


(defmethod enroll-student ((student student) (course course))
  (pushnew student (course-students course))
  (pushnew course (student-courses student)))


(defmethod assign-grade ((student student) (course course) (grade number))
  (pushnew grade (course-grades course))
  (format t "Grade ~A assigned to student ~A for course ~A.~%" grade (student-name student) (course-name course)))


(let ((system (make-instance 'training-system))
      (student1 (make-instance 'student :id 1 :name "Alice"))
      (student2 (make-instance 'student :id 2 :name "Bob"))
      (course1 (make-instance 'course :id 101 :name "Mathematics"))
      (course2 (make-instance 'course :id 102 :name "Computer Science")))
  (add-student system student1)
  (add-student system student2)
  (add-course system course1)
  (add-course system course2)
  (enroll-student student1 course1)
  (enroll-student student2 course1)
  (enroll-student student2 course2)
  (assign-grade student1 course1 90)
  (assign-grade student2 course1 85)
  (assign-grade student2 course2 88))
