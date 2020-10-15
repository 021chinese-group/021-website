import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Inf from "./Inf"
import WeChat from "./WeChat"
import Img from "gatsby-image"
import VerticalBound from "./VerticalBound"
import Others from "./Others"
import Item from "./Item"
import Link from "./Link"

export default function Contact() {
  const data = useStaticQuery(graphql`
    query Images {
      wechatqr: file(relativePath: { eq: "WeChat_QR.png" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wechatlogo: file(relativePath: { eq: "wechat-logo.png" }) {
        id
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "LinkedIn-Logo.png" }) {
        id
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      inst: file(relativePath: { eq: "Instagram_logo.png" }) {
        id
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fb: file(relativePath: { eq: "facebook_logo.png" }) {
        id
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      snapchat: file(relativePath: { eq: "snapchat.png" }) {
        id
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gmail: file(relativePath: { eq: "gmail.png" }) {
        id
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h3>You can find us on these social platforms.</h3>
      <Inf>
        <WeChat>
          <Img fixed={data.wechatqr.childImageSharp.fixed} />
          <Img fixed={data.wechatlogo.childImageSharp.fixed} />
        </WeChat>
        <VerticalBound />
        <Others>
          <Item>
            <Img fixed={data.linkedin.childImageSharp.fixed} />
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/021-chinese-entrepreneurs-group/about/"
            >
              021 Chinese Entrepreneurs Group
            </Link>
          </Item>
          <Item>
            <Img fixed={data.inst.childImageSharp.fixed} />
            <Link target="_blank" href="https://www.instagram.com/021utsc/">
              @021utsc
            </Link>
          </Item>
          <Item>
            <Img fixed={data.fb.childImageSharp.fixed} />
            <Link
              target="_blank"
              href="https://www.facebook.com/utsc.021chinese/"
            >
              021Chinese Group at UTSC
            </Link>
          </Item>
          <Item>
            <Img fixed={data.snapchat.childImageSharp.fixed} />
            <Link>UTSC021</Link>
          </Item>
          <Item>
            <Img fixed={data.gmail.childImageSharp.fixed} />
            <Link target="_blank" href="mailto:021chinese.group@gmail.com">
              021chinese.group@gmail.com
            </Link>
          </Item>
        </Others>
      </Inf>
      <h3>
        We are also open to sponsorship or collaborations. Please send your
        inquiries to{" "}
        <a class="link" href="mailto:021chinese.group@gmail.com">
          021chinese.group@gmail.com
        </a>
        .
      </h3>
    </Layout>
  )
}
