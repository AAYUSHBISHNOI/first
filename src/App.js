import './App.css';
import first from "../src/assets/img/png/first.png";
import second from "../src/assets/img/png/second.png";
import third from "../src/assets/img/png/third.png";
import fourth from "../src/assets/img/png/fourth.png";
import fifth from "../src/assets/img/png/fifth.png";
import six from "../src/assets/img/png/six.png";
import seven from "../src/assets/img/png/seven.png";
import last from "../src/assets/img/png/last.png";

function App() {
  return (
    <>
     <div className="container margin_section">
      <h2 className="font_family_hind fw_600 txt_clr fs_36 txt_cntr margin_txt">Featured Product</h2>
      <div className="row">
        <div className="col_5 position_reletive">
            <div>
              <img  className="w_100 img_radius img_height_1" src={first} alt="" />
              <p className="txt_cntr text_pstn txt_clr_3 font_family_hind fw_600 fs_58">Explore More <span className="d-block">Product</span></p>
            </div>
        </div>
        <div className="col_7">
            <div className="d_flex justify_content">
            <div className="card_1 mrgn_card_all">
              <img  className="w_100 card_img_radius img_height" src={second} alt="" />
              <p className="font_family_open txt_clr fs_16 fw_400 padding_para">Concetti Di-Lusso ALESANDRDO Luxury <span className="d_block">Turkish Spa Towels and ganic Bamboo</span> <span className="d_block">Robes 12 PC set</span></p>
              <div className="d-flex align_center padding_bttn">
              <p className="txt_clr_1 font_family_hind fs_24 fw_600">$169.99</p>
              <p className="txt_clr_2 font_family_hind fs_16 fw_400 pading_para linee">$199.99</p>
              <button className="fw_600 font_16 font_family_hind txt_clr_3 bttn_add margin_bttn">ADD CART</button>
              </div>
            </div>
            <div className="card_1 mrgn_card_all">
              <img  className="w_100 card_img_rds img_height" src={third} alt="" />
              <p className="font_family_open txt_clr fs_16 fw_400 padding_para">Concetti Di-Lusso ALESANDRDO Luxury <span className="d_block">Turkish Spa Towels and ganic Bamboo</span> <span className="d_block">Robes 12 PC set</span></p>
              <div className="d-flex align_center padding_bttn">
              <p className="txt_clr_1 font_family_hind fs_24 fw_600">$59.99</p>
              <p className="txt_clr_2 font_family_hind fs_16 fw_400 pading_para linee">$199.99</p>
              <button className="fw_600 font_16 font_family_hind txt_clr_3 bttn_add margin_bttn">ADD CART</button>
              </div>
            </div>
            </div>
            <div className="d_flex margin_card justify_content">
            <div className="card_1 mrgn_card_all">
              <img  className="w_100 card_img_radius img_height" src={fourth} alt="" />
              <p className="font_family_open txt_clr fs_16 fw_400 padding_para">Concetti Di-Lusso ALESANDRDO Luxury <span className="d_block">Turkish Spa Towels and ganic Bamboo</span> <span className="d_block">Robes 12 PC set</span></p>
              <div className="d-flex align_center padding_bttn">
              <p className="txt_clr_1 font_family_hind fs_24 fw_600">$159.99</p>
              <p className="txt_clr_2 font_family_hind fs_16 fw_400 pading_para linee">$199.99</p>
              <button className="fw_600 font_16 font_family_hind txt_clr_3 bttn_add margin_bttn">ADD CART</button>
              </div>
            </div>
            <div className="card_1 mrgn_card_all">
              <img  className="w_100 card_img_radius img_height" src={fifth} alt="" />
              <p className="font_family_open txt_clr fs_16 fw_400 padding_para">Concetti Di-Lusso ALESANDRDO Luxury <span className="d_block">Turkish Spa Towels and ganic Bamboo</span> <span className="d_block">Robes 12 PC set</span></p>
              <div className="d-flex align_center padding_bttn">
              <p className="txt_clr_1 font_family_hind fs_24 fw_600">$59.99</p>
              <p className="txt_clr_2 font_family_hind fs_16 fw_400 pading_para linee">$199.99</p>
              <button className="fw_600 font_16 font_family_hind txt_clr_3 bttn_add margin_bttn">ADD CART</button>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className="txt_cntr margin_bttn_show">
      <button className="fw_600 font_family_hind fs_18 bttn_show txt_clr_3">SHOW MORE</button>
      </div>
     </div>
     <div className="container mrgn_section">
      <h2 className="font_family_hind fw_600 fs_36 txt_clr txt_cntr">Trending Product</h2>
      <div className="row mrgn_card">
        <div className="col_4">
          <div className="card_2">
          <img  className="w_100 card_img_rds img_height_card" src={six} alt="" />
          <div className="padding_txt">
          <p className="txt_clr_1 fs_24 fw_700 font_family_hind margin_para">PERFECT GIFT EVEN FOR <span className="d_block">YOURSELF!</span></p>
          <p className="font_family_open fw_400 fs_17 txt_clr_4">Well suited as a gift set, these cotton towels <span className="d_block">look so decorative and soft that we won’t judge</span><span className="d_block">if you want to keep them for your family</span><span className="d_block">and yourself.</span></p>
          </div>
          </div>
        </div>
        <div className="col_4 mrgn_card_2">
          <div className="card_2">
          <img  className="w_100 card_img_rds img_height_card" src={seven} alt="" />
          <div className="padding_txt">
          <p className="txt_clr_1 fs_24 fw_700 font_family_hind margin_para">USE FOR ANYTHING</p>
          <p className="font_family_open fw_400 fs_17 txt_clr_4">Perfect for your hands, face and  body…<span className="d_block">and for your kids too! These towels’ softness is</span><span className="d_block">ideal for toddler’s and baby’s delicate skin.</span><span className="d_block">And the best part? They’re washable,</span><span className="d_block">quick-dry towels that will last forever.</span></p>
          </div>
          </div>
        </div>
        <div className="col_4 mrgn_card_3">
          <div className="card_3">
          <img  className="w_100 card_img_rds img_height_card" src={last} alt="" />
          <div className="padding_txt">
          <p className="txt_clr_1 fs_24 fw_700 font_family_hind margin_para">EXTRA ABSORBENT</p>
          <p className="font_family_open fw_400 fs_17 txt_clr_4">Thanks to its natural properties, our 100%<span className="d_block">Turkish Cotton Towels are super absorbent,</span><span className="d_block">making the m perfect for drying off in</span><span className="d_block">any scenario. </span></p>
          </div>
          </div>
        </div>
      </div>
      <div className="txt_cntr mrgn_bttn_show">
      <button className="fw_600 font_family_hind fs_18 bttn_show txt_clr_3">SHOW MORE</button>
      </div>
     </div>
    </>
  );
}

export default App;
