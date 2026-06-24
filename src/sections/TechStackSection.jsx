import styled from 'styled-components'
import {TechStack} from '../components/TechStack'

import html from '@assets/stack-logos/html.svg'
import css from '@assets/stack-logos/css.svg'
import javascript from '@assets/stack-logos/javascript.svg'
import angular from '@assets/stack-logos/angular.svg'
import rxjs from '@assets/stack-logos/rxjs.svg'
import typescript from '@assets/stack-logos/typescript.svg'

import nodejs from '@assets/stack-logos/nodejs.svg'
import mongodb from '@assets/stack-logos/mongodb.svg'
import nestjs from '@assets/stack-logos/nestjs.svg'
import java from '@assets/stack-logos/java.svg'
import springboot from '@assets/stack-logos/springboot.svg'
import psql from '@assets/stack-logos/postgresql.svg'

import canva from '@assets/stack-logos/canva.svg'
import webflow from '@assets/stack-logos/webflow.svg'
import figma from '@assets/stack-logos/figma.svg'

import git from '@assets/stack-logos/git.svg'
import github from '@assets/stack-logos/github.svg'
import postman from '@assets/stack-logos/postman.svg'
import claude from '@assets/stack-logos/claude.svg'
import docker from '@assets/stack-logos/docker.svg'
import jira from '@assets/stack-logos/jira.svg'






const frontEndArray = [
    {icon:html,name:'HTML'},
    {icon:css,name:'CSS/SCSS'},
    {icon:javascript,name:'Javascript'},
    {icon:angular,name:'Angular'},
    {icon:typescript,name:'Typescript'},
    {icon:rxjs,name:'RxJS'}
]

const backEndArray = [
    {icon:java,name:'Java'},
    {icon:nodejs,name:'NodeJS'},
    {icon:nestjs,name:'NestJS'},
    {icon:springboot,name:'Spring Boot'},
    {icon:psql,name:'PostgreSQL'},
    {icon:mongodb,name:'MongoDB'},
]

const UxArray = [
    {icon:figma,name:'Figma'},
    {icon:webflow,name:'Webflow'},
    {icon:canva,name:'Canva'},
]

const toolsArray = [
    {icon:git,name:'Git'},
    {icon:claude,name:'Claude'},
    {icon:docker,name:'Docker'},
    {icon:github,name:'Github'},
    {icon:postman,name:'Postman'},
    {icon:jira,name:'Jira'},

]

const StyledSection = styled.section`

    width:100%;
    margin:0 auto;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:100svh;
    align-items:center;


    >h2 {
        color:var(--primary);
        letter-spacing:.15rem;
        font-size:36px;
        font-family:'Bebas Neue',sans-serif;
        text-align:center;
    }

    >div {
        display:flex;
        align-items:flex-start;
        flex-wrap:wrap;
        max-width:1000px;
        margin:auto;
        gap:60px 40px;
    }
    
`


export function TechStackSection() {
    return(
        <StyledSection id='skills'>
        <h2>Compétences techniques</h2> 
        <div>
        <TechStack title={'Front-End'} array={frontEndArray}/>
        <TechStack title={'Back-End'} array={backEndArray}/>
        <TechStack title={'UX/UI Design'} array={UxArray}/>
        <TechStack title={'Tools'} array={toolsArray}/>
        </div>   
        </StyledSection>
    )
}

export default TechStackSection