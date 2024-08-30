import styled from 'styled-components'
import {TechStack} from '../components/TechStack'

import html from '@assets/stack-logos/html.svg'
import css from '@assets/stack-logos/css.svg'
import javascript from '@assets/stack-logos/javascript.svg'
import react from '@assets/stack-logos/react.svg'
import angular from '@assets/stack-logos/angular.svg'
import bootstrap from '@assets/stack-logos/bootstrap.svg'

import nodejs from '@assets/stack-logos/nodejs.svg'
import php from '@assets/stack-logos/php.svg'
import mysql from '@assets/stack-logos/mysql.svg'
import mongodb from '@assets/stack-logos/mongodb.svg'
import express from '@assets/stack-logos/express.svg'

import canva from '@assets/stack-logos/canva.svg'
import webflow from '@assets/stack-logos/webflow.svg'
import figma from '@assets/stack-logos/figma.svg'

import git from '@assets/stack-logos/git.svg'
import github from '@assets/stack-logos/github.svg'
import postman from '@assets/stack-logos/postman.svg'
import chatgpt from '@assets/stack-logos/chatgpt.svg'





const frontEndArray = [
    {icon:html,name:'html'},
    {icon:css,name:'css'},
    {icon:javascript,name:'javascript'},
    {icon:react,name:'react 18'},
    {icon:angular,name:'angular 18'},
    {icon:bootstrap,name:'bootstrap'}
]

const backEndArray = [
    {icon:nodejs,name:'nodejs'},
    {icon:express,name:'express'},
    {icon:php,name:'php'},
    {icon:mysql,name:'mysql'},
    {icon:mongodb,name:'mongodb'},
]

const UxArray = [
    {icon:figma,name:'figma'},
    {icon:webflow,name:'webflow'},
    {icon:canva,name:'canva'},
]

const toolsArray = [
    {icon:git,name:'git'},
    {icon:github,name:'github'},
    {icon:postman,name:'postman'},
    {icon:chatgpt,name:'chatgpt'},

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