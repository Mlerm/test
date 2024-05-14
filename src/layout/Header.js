import React from "react";

export const Header = () => {
    return(
        <>
        <header className="center">
            <div className="header_pos">
                <img src="/img/header-logo2.png" style={{ float: 'left', position:'relative', right:'100px', top:'5px' }}/>
              <div className="header_right">
                <ul>
                  <li>
                  </li>
                  <li> 
                    <p style={{ color:'black', display:'flex', position: 'absolute', top: '20px', right: '150px' }}>中部 太郎さん(MyコミュファID: <span>chubu.taro@commufa.co.jp</span> )</p>
                  </li>
                  <li className="pc_only">
                   
                      <button className="btn_logout" type="button" style={{ position: 'absolute', top: '20px', right: '60px' }} >ログアウト</button>
                  
                  </li>
                </ul>
              </div>
            </div>
          
        </header> 
            <nav class="navbar background">
              <ul class="nav-list">
                
                <li><img src="/img/icons/house.svg" alt="house"style={{ marginRight: '15px' }} /> <a href= "ホーム">ホーム </a></li>
                <li><img src="/img/icons/fee.svg" alt="fee" style={{ marginRight: '15px' }}  /><a href="#ご利用料金">ご利用料金</a></li>
                <li><img src="/img/icons/detail.svg" alt="detail" style={{ marginRight: '15px' }} /><a href="#契約・登録内容">契約・登録内容</a></li>
                <li><img src="/img/icons/procedure.svg" alt="procedure" style={{ marginRight: '15px' }} /><a href='#サービスお手続き'>サービスお手続き</a></li>
                <li><img src="/img/icons/support.svg" alt="house" style={{ marginRight: '15px' }}oo/><a href='#障害・サポート'>障害・サポート</a></li>
              </ul>
            </nav>
            
            <hr className='horizontal-line'/>
            <div>
            <nav className="breadcrumb">
          <ol className= "breadcrumb-list">
              <div className="navigation-title" >
                <a title="/" href="#" >MyコミュファTOP</a>
              </div>
              <span className="separator">&gt;</span>
            <li className="breadcrumb-item last">
              <div className="navigation-title">
                <a title="/" href="#">お探しのページは見つかりませんでした</a>
              </div>
       
            </li>
          </ol>
        </nav>
        </div>
        </>
    )
}


