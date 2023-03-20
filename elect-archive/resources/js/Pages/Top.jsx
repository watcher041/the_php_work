
// 相対パスで外部ファイルを参照するにはimportが必要 
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { css } from '@emotion/react'
import background from "../../images/top.png";

const main = css`
  width: 100vw;
  height:35vw;
`;

const top_area = css`
    background-image: url(${background}) ;
    background-size:cover;
    width:70%;
    height:100%;
    margin: 0 auto;
    display:flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    > h2 {
        background-color:white;
        width: fit-content;
        margin-bottom:20px;
        padding:3px;
    }
`;

export default function Top(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
        <div css={main} >
            <div css={top_area}>
                <h2>電子図書をお求めの方へ</h2>
                <h2>ここで本を探してみませんか？</h2>
            </div>
        </div>

        </AuthenticatedLayout>
    );
}
