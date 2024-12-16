import CourseNav from "@/app/components/courseNav"

const CourseLayout = ({children})=>{

    return(
        <>
        <CourseNav/>
        {children}
        </>
    )
}

export default CourseLayout