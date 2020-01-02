/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import './profile.css'

import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Image from './image'
import PropTypes from "prop-types"
import React from "react"

const Profile = () =>(
    <div className="row profile">
        <div className="col">
            <header>
                <span className="profile-name"><strong title="you can call me Tae">Tae</strong>Rim Shin</span>
                <a className="profile-link icon github" href="https://github.com/Ta2Rim" target="_blank">github</a>
                <a className="profile-link icon twitter" href="https://twitter.com/taeshindev" target="_blank">twitter</a>
            </header>
            <p className="profile-comment">// persistent Web Front-end Developer who love to make creative and beautiful stuff</p>
        </div>
    </div>
)
export default Profile
