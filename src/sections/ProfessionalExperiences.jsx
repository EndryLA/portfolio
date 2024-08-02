import styled from "styled-components";
import { ProfessionalExperience } from "../components/ProfessionalExperience";

const StyledComponent = styled.div`
    display:flex;
    flex-direction:column;
`

export function ProfessionalExperiences() {
    return(
        <StyledComponent>

            <ProfessionalExperience
                period='février 2022 - présent'
                title='Graduate Développeur Web Full Stack'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            />
            <ProfessionalExperience
                period='février 2022 - présent'
                title='Graduate Développeur Web Full Stack'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            />

        </StyledComponent>
    )
}