/*
 * Author: xiongziting
 * Date: 2020-08-24 22:10:36
 * LastEditors: xiongziting
 * LastEditTime: 2020-09-09 10:57:57
 * Description: canvas绘图
 * FilePath: /react-pro/src/pages/demo/canvas/index.jsx
 */

import React, { Component } from 'react';
import moment from 'moment';
import topIcon from '../../../assets/top_icon.png';
import timeBg from '../../../assets/time_bg.jpg';
import bannerNoTitle from '../../../assets/banner_no_title.png';
import bannerWithTitle from '../../../assets/banner_with_title.png';

class DrawImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    let { rankingInfos, type, courseName = '', rankingTopPic = '', createTime } = props;

    let data = [
      {
        enName: 'xxxxx',
        isFake: true,
        portrait:
          'http://ac-dev.oss-accelerate.aliyuncs.com/20200904/76b810d0-a44c-45d4-90e4-08b1214c3ca3.jpg',
        tailPhone: '8430',
        userId: 9,
      },
      {
        enName: 'eric',
        isFake: true,
        portrait:
          'http://ac-dev.oss-accelerate.aliyuncs.com/20200904/a6bd57ed-0436-483b-a3b3-7e1e6bd4bbfa.jpg',
        tailPhone: '9536',
        userId: 8,
      },
      {
        enName: 'eeee',
        isFake: true,
        portrait:
          'http://ac-dev.oss-accelerate.aliyuncs.com/20200903/207da72f-9606-4ad3-af8b-71eddca571ba.jpg',
        tailPhone: '9536',
        userId: 7,
      },
      {
        enName: 'test1',
        isFake: true,
        portrait:
          'http://ac-dev.oss-accelerate.aliyuncs.com/20200903/01e2835c-e94e-4f71-a8cb-4b10a0040b42.png',
        tailPhone: '1543',
        userId: 4,
      },
    ];
    this.data = rankingInfos || data;
    this.createTime = createTime;

    // 1 活动 2 课程
    if (type === 0 || !!rankingTopPic) {
      this.bannerUrl = rankingTopPic || bannerWithTitle;
      this.courseName = '';
    } else if (type === 1 || !!courseName) {
      this.bannerUrl = bannerNoTitle;
      this.courseName = courseName;
    } else {
      this.bannerUrl = bannerWithTitle;
      this.courseName = '';
    }
  }

  componentDidMount() {
    let canvas = this.refs.wrapEl; // 获取canvas元素
    let ctx = canvas.getContext('2d'); // 创建context对象

    let bannerW = 375; // banner图宽度
    let bannerH = 175; // banner图高度

    let marginW = 15; // 白色背景跟灰色背景间的距离
    let marginH = 30; // 白色背景跟灰色背景间的距离

    let timeMarginH = 10; // 时间间距高度

    let columnW = 90; // 表格每格宽度
    let columnH = 50; // 表格每格高度
    let tableH = columnH * (this.data.length + 1) < 350 ? 350 : columnH * (this.data.length + 1); // 表格高度

    let timeBgH = 55; // 榜单生成时间背景高度

    let canvasH = bannerH + tableH + timeBgH + 2 * marginH * 2; // canvas高度
    let canvasW = bannerW; // canvas宽度
    canvas.width = canvasW; // 画布宽度
    canvas.height = canvasH; // 画布高度

    let whiteBgW = canvasW - 2 * marginW; // 白色背景宽度
    let whiteBgH = tableH + timeBgH + 2 * marginH; // 白色背景高度

    let timeBgW = whiteBgW - 2 * marginW; // 时间背景宽度

    let tableW = timeBgW; // 表格宽度

    ctx.strokeStyle = '#ccc';
    ctx.textAlign = 'center';
    ctx.font = 'normal normal 12px Arial';

    // 绘制banner图
    let bannelImg = new Image();
    bannelImg.src = this.bannerUrl;

    let _this = this;
    bannelImg.onload = function() {
      //等图片加载完成后再绘制
      ctx.drawImage(bannelImg, 0, 0, bannerW, bannerH);

      // 绘制课程名称
      if (_this.courseName) {
        ctx.fillStyle = '#FEF0B9';
        ctx.font = '15px FZLANTY_ZHUNJW--GB1-0';
        let name = '';
        if (_this.courseName.length > 10) {
          name = _this.courseName.slice(0, 10) + '...';
        } else {
          name = _this.courseName;
        }
        ctx.fillText(name, 240, 110);
      }

      // 绘制榜单灰色数据背景
      ctx.fillStyle = '#f6f6f6';
      ctx.fillRect(0, bannerH, canvasW, canvasH - bannerH + timeBgH);

      // 绘制底部公司文案
      ctx.fillStyle = '#CCCCCC';
      ctx.fillText('杭州潘哒科技有限公司', canvasW / 2, canvasH - 30);

      // 绘制榜单白色数据背景
      _this.fillRoundRect(ctx, marginW, bannerH - marginH, whiteBgW, whiteBgH, 15, '#ffffff');

      // 绘制榜单生成时间
      let timeBgImg = new Image();
      timeBgImg.src = timeBg;

      //等图片加载完成后再绘制
      timeBgImg.onload = function() {
        ctx.drawImage(timeBgImg, 2 * marginW, bannerH - timeMarginH, timeBgW, timeBgH);
        ctx.fillStyle = '#333333';
        ctx.font = '15px FZLANTY_ZHONGCUJW--GB1-0';
        ctx.fillText('榜单生成时间： ', canvasW / 3, bannerH + timeBgH / 2.5);
        ctx.fillStyle = '#E88314';
        ctx.font = '18px FZLANTY_ZHONGCUJW--GB1-0';
        ctx.fillText(
          moment(_this.createTime).format('MM/DD HH:mm:ss'),
          canvasW / 3 + 115,
          bannerH + timeBgH / 2.5,
        );
      };

      // 绘制表格
      let textHeight = columnH / 1.6;
      let tableX = 2 * marginW;
      let tableY = bannerH + columnH;
      ctx.fillStyle = '#fff';
      ctx.fillRect(tableX, tableY, tableW, tableH);
      let paddingW = 10;

      // 绘制表头
      ctx.fillStyle = '#999999';
      ctx.font = '15px FZLANTY_ZHUNJW--GB1-0';
      ctx.fillText('姓名', columnW, bannerH + timeBgH + textHeight);
      ctx.fillText('手机尾号', tableW - columnW - 2 * paddingW, bannerH + timeBgH + textHeight);
      ctx.fillText('打卡天数', tableW - paddingW, bannerH + timeBgH + textHeight);

      // 绘制表格内容
      let dataLength = _this.data && _this.data.length;
      for (let i = 0; i < dataLength; i++) {
        let rankItem = _this.data[i];
        // 头像
        let portraitW = 25;
        let portraitH = 25;
        let portraitImg = new Image();
        portraitImg.src = rankItem.portrait || '';
        //等图片加载完成后再绘制
        portraitImg.onload = function() {
          
          let circle = {
            x: tableX + paddingW + portraitW / 2,
            y: tableY + columnH * (i + 1) + portraitH,
            r: portraitW / 2,
          };
          //开始路径画圆,剪切处理
          ctx.save();
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
          ctx.clip(); //剪切路径
          
          ctx.drawImage(
            portraitImg,
            tableX + paddingW,
            tableY + columnH * (i + 1) + portraitH / 2,
            portraitW,
            portraitH,
          );
          
          //恢复状态
          ctx.restore();
        };

        // 姓名
        ctx.fillStyle = '#333333';
        ctx.fillText(
          rankItem.enName || '',
          tableX + marginW * 2 + paddingW * 2 + portraitW,
          tableY + columnH * (i + 1) + textHeight,
        );

        // 尾号
        ctx.fillText(
          rankItem.tailPhone || '',
          tableX + marginW * 2 + paddingW * 3 + portraitW + columnW,
          tableY + columnH * (i + 1) + textHeight,
        );

        // 打卡天数
        // 图标
        if (rankItem.award) {
          let topThreeIcon = new Image();
          topThreeIcon.src = topIcon;
          //等图片加载完成后再绘制
          topThreeIcon.onload = function() {
            ctx.drawImage(
              topThreeIcon,
              tableX + marginW + (paddingW * 3) / 2 + portraitW + columnW * 2,
              tableY + columnH * (i + 1) + paddingW,
              23,
              23,
            );
          };
        }
        // 天数
        ctx.fillStyle = '#E88314';
        ctx.fillText(
          rankItem.attendCnt || 0 + '天',
          tableX + marginW * 2 + paddingW * 2 + portraitW + columnW * 2 + 25,
          tableY + columnH * (i + 1) + textHeight,
        );

        // 线条
        if (i > 0 && i < dataLength) {
          ctx.beginPath();
          ctx.moveTo(tableX, tableY + columnH * (i + 1));
          ctx.lineTo(tableX + tableW, tableY + columnH * (i + 1));
          ctx.closePath();
          ctx.strokeWidth = 1;
          ctx.strokeStyle = 'rgba(164, 164, 164, 0.06)';
          ctx.stroke();
        }
      }
    };
  }

  /**绘制一个有填充色的圆角矩形
   *@param cxt:canvas的上下文环境
   *@param x:左上角x轴坐标
   *@param y:左上角y轴坐标
   *@param width:矩形的宽度
   *@param height:矩形的高度
   *@param radius:圆的半径
   *@param fillColor:填充颜色
   **/
  fillRoundRect(cxt, x, y, width, height, radius, /*optional*/ fillColor) {
    //圆的直径必然要小于矩形的宽高
    if (2 * radius > width || 2 * radius > height) {
      return false;
    }
    cxt.save();
    cxt.translate(x, y);

    //绘制圆角矩形的各个边
    this.drawRoundRectPath(cxt, width, height, radius);
    cxt.fillStyle = fillColor || '#000'; //若是给定了值就用给定的值否则给予默认值
    cxt.fill();
    cxt.restore();
  }

  drawRoundRectPath(cxt, width, height, radius) {
    cxt.beginPath(0);
    //从右下角顺时针绘制，弧度从0到1/2PI
    cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2);

    //矩形下边线
    cxt.lineTo(radius, height);

    //左下角圆弧，弧度从1/2PI到PI
    cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);

    //矩形左边线
    cxt.lineTo(0, radius);

    //左上角圆弧，弧度从PI到3/2PI
    cxt.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2);

    //上边线
    cxt.lineTo(width - radius, 0);

    //右上角圆弧
    cxt.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2);

    //右边线
    cxt.lineTo(width, height - radius);
    cxt.closePath();
  }

  render() {
    return <canvas ref="wrapEl"></canvas>;
  }
}

export default DrawImage;
