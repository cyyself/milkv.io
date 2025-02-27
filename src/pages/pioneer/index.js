import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from "../../components/BuyPop"
import ContactUs from "../../components/ContactUs"
import ContactBar from "../../components/ContactBar"
import cCss from "./center.module.css"
import Translate from '@docusaurus/Translate';
import MetaData from "../../components/MetaData"


function Center() {
  const [pionner, setPionner] = useState(false)

  const pStart = () => {
    setPionner(false)
  }

  return (
    <div className={cCss.centerBox}>
      <Head flag={pionner} module={pStart} type='pioneer' />
      <div className={cCss.bigimg}>
        <div className={cCss.center_Box}>
          <div className={cCss.pagBox}></div>
          <div className={cCss.titleBox}>
            <h2>Milk-V <Translate id='pioneer' /></h2>
            <p><Translate id='pioneer.page.title' /></p>
            <div className={cCss.buy}>
              <div className={cCss.btnbuy} onClick={() => setPionner(buy => !buy)}><Translate id='Buy.now' /></div>
            </div>
          </div>
        </div>
      </div>
      <div className={cCss.startbox}>
        <div className={cCss.power}>
          <div className={cCss.power1}>
            <h2><Translate id='pioneer.page.Specification.text1' /></h2>
            <div className={cCss.powerimg}></div>
          </div>
          <div className={cCss.power2}>
            <div className={cCss.power2_txt}><Translate id='pioneer.page.Specification.text2' /></div>
            <div className={cCss.power2_1}>
              <p>Main Frequency</p>
              <p>L1 Cache</p>
              <p>L2 Cache</p>
              <p>L3 Cache</p>
              <p>Typical power consumption</p>
              <p>DDR</p>
              <p>PCI-E</p>
            </div>
            <div className={cCss.power2_2}>
              <p>2GHz</p>
              <p>I:64KB and D:64KB</p>
              <p>1MB/Cluster</p>
              <p>64MB System Cache</p>
              <p>120W</p>
              <p>4 channel 3200Hz ECC RDIMM/UDIMM/SODIMM</p>
              <p>2 x 16x Gen4 with CCIX support</p>
            </div>
          </div>
        </div>
        <div className={cCss.newTab}>
          <h3>Pioneer Board</h3>
          <img src='/pioneer/new-board-info.webp' alt='Pioneer Board' />
          <ul className={cCss.tab_info}>
            <li>
              <p>
                <span>1</span>
                <span>SOPHON SG2042</span>
              </p>
              <p>
                <span>2</span>
                <span>PCIe Switch(ASM2824)</span>
              </p>
              <p>
                <span>3</span>
                <span>DDR4 DIMM Slot</span>
              </p>
              <p>
                <span>4</span>
                <span>SD Card Slot</span>
              </p>
              <p>
                <span>5</span>
                <span>2.5GbE Ethernet Port</span>
              </p>
              <p>
                <span>6</span>
                <span>USB3</span>
              </p>
              <p>
                <span>7</span>
                <span>PCIe 4.0 x16</span>
              </p>
              <p>
                <span>8</span>
                <span>M.2 E Key (PCIe 3.0 x1 + USB 2.0)</span>
              </p>
              <p>
                <span>9</span>
                <span>M.2 M Key (PCIe 3.0 x4)</span>
              </p>
            </li>
            <li>
              <p>
                <span>10</span>
                <span>PCIe 4.0 x8</span>
              </p>
              <p>
                <span>11</span>
                <span>MCU(for Power-up control)</span>
              </p>
              <p>
                <span>12</span>
                <span>SATA3 6Gbps</span>
              </p>
              <p>
                <span>13</span>
                <span>24P ATX Power Supply Connector</span>
              </p>
              <p>
                <span>14</span>
                <span>LPC</span>
              </p>
              <p>
                <span>15</span>
                <span>LPC</span>
              </p>
              <p>
                <span>16</span>
                <span>Pin for Start, Power off, etc.</span>
              </p>
              <p>
                <span>17</span>
                <span>CPU FAN Connectors</span>
              </p>
              <p>
                <span>18</span>
                <span>GPIO</span>
              </p>
            </li>
            <li>
              <p>
                <span>19</span>
                <span>UART</span>
              </p>
              <p>
                <span>20</span>
                <span>SPIF</span>
              </p>
              <p>
                <span>21</span>
                <span>JTAG</span>
              </p>
              <p>
                <span>22</span>
                <span>USB</span>
              </p>
              <p>
                <span>23</span>
                <span>SG2042 & MCU Debug</span>
              </p>
              <p>
                <span>24</span>
                <span>MCU Programming and Debugging Pin</span>
              </p>
              <p>
                <span>25</span>
                <span>eMMC Module Connector</span>
              </p>
            </li>
          </ul>
        </div>
        <div className={cCss.pionBox}>
          <div className={cCss.pionBox_1}>
            <div className={cCss.pionBox_1_img}></div>
          </div>
          <div className={cCss.pionBox_2}>
            <ul>
              <li>
                <p><Translate id='pioneer.page.Box.text1' /></p>
                <h2 className={cCss.h1_1}>AMD R5 230</h2>
                <div><Translate id='pioneer.page.Box.text2' /></div>
                <div className={cCss.show1}></div>
              </li>
              <li>
                <p><Translate id='pioneer.page.Box.text1' /></p>
                <h2 className={cCss.h1_2}>Intel X540-T2</h2>
                <div><Translate id='pioneer.page.Box.text3' /></div>
                <div className={cCss.show2}></div>
              </li>
              <li>
                <p><Translate id='pioneer.page.Box.text1' /></p>
                <h2 className={cCss.h1_3}>MSI A350 350W</h2>
                <div><Translate id='pioneer.page.Box.text4' /></div>
                <div className={cCss.show3}></div>
              </li>
            </ul>
          </div>
          <div className={cCss.pionBox_3}>
            <ul>
              <li>
                <p><Translate id='pioneer.page.Box.text1' /></p>
                <h2 className={cCss.h1_1}>128GB 3200MHz</h2>
                <div>DDR4</div>
                <div className={cCss.show1}></div>
              </li>
              <li>
                <p><Translate id='pioneer.page.Box.text1' /></p>
                <h2 className={cCss.h1_2}>1TB</h2>
                <div>PCIe 3.0 SSD</div>
                <div className={cCss.show2}></div>
              </li>
              <li>
                <p><Translate id='pioneer.page.Box.text1' /></p>
                <h2 className={cCss.h1_3}>RGB</h2>
                <div><Translate id='pioneer.page.Box.text5' /></div>
                <div className={cCss.show3}></div>
              </li>
            </ul>
          </div>
        </div>
        <div className={cCss.support_ioc}>
          <img src='/pioneer/support-icon1.webp' alt='Support' />
          <img src='/pioneer/support-icon2.webp' alt='Support' />
          <img src='/pioneer/support-icon3.webp' alt='Support' />
          <img src='/pioneer/support-icon4.webp' alt='Support' />
          <img src='/pioneer/support-icon5.webp' alt='Support' />
          <img src='/pioneer/support-icon6.webp' alt='Support' />
          <img src='/pioneer/support-icon7.webp' alt='Support' />
        </div>
        <div className={cCss.bannerBox}>
          <div className={cCss.bannerimg1}>
            <div className={cCss.bannerimg1_1}></div>
            <div className={cCss.bannerT}><Translate id='pioneer.page.really1' /></div>
          </div>
          <div className={cCss.bannerimg2}>
            <div className={cCss.bannerimg2_1}></div>
            <div className={cCss.bannerT}>SWITCH</div>
          </div>
          <div className={cCss.bannerimg3}>
            <div className={cCss.bannerimg3_1}></div>
            <div className={cCss.bannerT}>NAS</div>
          </div>
        </div>
      </div>
      <div className={cCss.footText}>
        <div className={cCss.chartTech}>
          <div className={cCss.title}><Translate id='line.title.TechSpecs' /></div>
          <div className={cCss.tech_text1}>
            <p className={cCss.tech_p}><Translate id='pioneer.page.info' /></p>
          </div>
          <div className={cCss.tech_text2}>
            <h2 className={cCss.tech_title}><Translate id='duo.info.text.Hardware' /></h2>
            <h2>Pioneer Board</h2>
            <p className={cCss.tech_p_line}>- SOPHGO SG2042 Chip (64-core C920, RVV 0.71)</p>
            <p className={cCss.tech_p_line}>- 64 Core RISC-V CPU up to 2GHz</p>
            <p className={cCss.tech_p_line}>- 4x DDR4 DIMM slots up to 128GB ram support</p>
            <p className={cCss.tech_p_line}>- 1x PCIe x16 Slot (PCIe 4.0 x16)</p>
            <p className={cCss.tech_p_line}>- 1x PCIe x16 Slot (PCIe 4.0 x8)</p>
            <p className={cCss.tech_p_line}>- 5x SATA</p>
            <p className={cCss.tech_p_line}>- 8x USB3</p>
            <p className={cCss.tech_p_line}>- 2x M.2 M KEY (PCIe 3.0 x4)</p>
            <p className={cCss.tech_p_line}>- 1x M.2 E KEY (PCIe 3.0 x1 + USB 2.0)</p>
            <p className={cCss.tech_p_line}>- 2x RJ45 2.5G</p>
            <p className={cCss.tech_p_line}>- 1x USB Header for front panel (2x USB 3.0)</p>
            <p className={cCss.tech_p_line}>- 1x misc header for front panel power, reset, LED etc</p>
            <p className={cCss.tech_p_line}>- 1x eMMC module connector</p>
            <p className={cCss.tech_p_line}>- 1x micro USB debug console</p>
            <p className={cCss.tech_p_line}>- 1x micro SD card for recovery or OS loading</p>
            <p className={cCss.tech_p_line}>- 1x SPI flash for BIOS</p>
            <p className={cCss.tech_p_line}>- 1x standard 24-pin ATX power connector</p>
          </div>

          <div className={cCss.tech_text4}>
            <h2>Pioneer Box</h2>
            <p className={cCss.box_tit}>Pioneer Box is a complete ready-to-use RISC-V PC with the following:</p>
            <p className={cCss.tech_p_line}>- 1x Pioneer Board</p>
            <p className={cCss.tech_p_line}>- 128GB 3200 DDR4</p>
            <p className={cCss.tech_p_line}>- 1x 1TB PCIe 3.0 SSD</p>
            <p className={cCss.tech_p_line}>- 1x Intel X540-T2 Network Card with 2x 10Gbps RJ45 ports</p>
            <p className={cCss.tech_p_line}>- 1x AMD R5 230 Graphic Card with HDMI, VGA and DVI</p>
            <p className={cCss.tech_p_line}>- 1x MSI A350 350W Power Apply</p>
            <p className={cCss.tech_p_line}>- 1x Cooler with PWM Fan up to 2300 RPM supporting up to 160W D-TDP</p>
            <p className={cCss.tech_p_line}>- White slim PC enclosure with handle</p>
          </div>
        </div>
      </div>
      <ContactUs product='pioneer' />
      <ContactBar product='pioneer' />
    </div>
  )
}


export default function () {
  return (
    <>
      <Layout>
        <MetaData page='pioneer' />
        <Center />
      </Layout>
    </>
  )
}
