import React from "react";


export const Body = () => {
return(
    <>
      <section class="section-one">
            <div class="firstSec">
              <h1 class="text-big"> 
              お探しのページは見つかりませんでした
              </h1>
            </div>
        </section>

        <section class="section">
          <div class="box-main">
            <div class="secondHalf">
            <span>申し訳ございません。<br/>
                  お探しのページは見つかりませんでした。</span>
            </div>
          </div>
        </section>

        <section class="section2">
          <div class="box-main">
            <div class="secondHalf">
              <h1 className='head'>考えられる原因</h1>
              <hr className='body-hline'/>
              <p class="text-small">
              このページが表示された原因には、以下の可能性があります。
              </p>
            </div>
          </div>
        </section>

          
        <div class='box-main3'>
          <ul className='bullet'>
            <li>お探しのページが削除されている</li>
            <li>お探しのページが移動している</li>
            <li>誤ったページアドレスを入力された</li>
          </ul>
        </div>
          

        <section class="section2">
          <div class="box-main">
            <div class="secondHalf">
              <h1 className='head'>解決のヒント</h1>
              <hr className='body-hline'/>
              <p class="text-small">
              大変お手数ではございますが、MyコミュファTOPページよりお探しください。
              </p>
            </div>
          </div>
        </section>
    </>

)

}


