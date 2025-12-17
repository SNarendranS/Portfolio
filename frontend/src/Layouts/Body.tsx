import Intro from '../Pages/Intro'
import DivWrapper from '../utils/DivWrapper';
import Projects from '../Pages/Projects';
import type { RefType } from '../Types/indexTypes';
type BodyProp = {
    ref: RefType
}
const Body = (prop: BodyProp) => {
    return (
        <>
            <DivWrapper ref={prop.ref.introRef} child={<Intro />} />
            <DivWrapper ref={prop.ref.projectsRef} child={<Projects />} />
        </>
    )
}

export default Body