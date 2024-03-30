import './Foot.css'
function Foot(){
    return(
        <>
          <div className="footer">
            <div className="footer-img">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1485&q=80&fit=max&auto=format" alt="" />
            </div>
            <div className="footer-text">
                <h1>Save $$$ <br/>With offers on demand</h1>
                <img src="https://cdn.vectorstock.com/i/preview-1x/50/38/google-play-store-apple-app-download-vector-33375038.jpg" alt="" />
                 <p>Save $$$With offers on demandApple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
            </div>
          </div>
          <div className="mini-footer">
            <p>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.Do Not Sell Or Share My Personal Information</p>
          </div>
          <div className="main-footer">
            <div className="icon">
                <img src="https://static.vecteezy.com/system/resources/previews/007/725/043/original/home-icon-ui-icon-vector.jpg" alt="" />
                 <p>Home</p>
            </div>
            <div className="icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPL_wmpiPyQ4Q1UvQ9gs7N8MSYIXFIJX8hNaiWREINd2v8qdxEPn7YKcz_4k1Py1C1ec&usqp=CAU" alt="" />
                 <p>Menu</p>
            </div>
            <div className="icon" id="mycode">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdMDeFphEvyogPX5g_Ou5CurpVjzqNHL63Q&usqp=CAU" alt="" />
              <p>My Code</p>
            </div>
            <div className="icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU97CSYVcY8AT1as4bvWJdeReNfiXuF0suw91x0TU1ewoOxTmIoe0CPVTFcabbpl-z1bY&usqp=CAU" alt="" />
                 <p>Offer</p>
            </div>
            <div className="icon">
                 <img src="https://cdn-icons-png.flaticon.com/512/2666/2666513.png" alt="" />
                 <p>Reward</p>
            </div>
          </div>
          
        </>
    )
}
export default Foot