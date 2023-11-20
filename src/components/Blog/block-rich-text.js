import React from "react"

const BlockRichText = ({ data }) => {
  return (
    <div className="prose mx-auto py-8" style={{padding:"20px"}}>
      <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default BlockRichText
