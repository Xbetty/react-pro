/*
 * Author: xiongziting
 * Date: 2020-08-14 11:20:09
 * LastEditors: xiongziting
 * LastEditTime: 2020-08-14 11:31:16
 * Description: canvas绘制图片
 * FilePath: \react-pro\src\pages\demo\canvas\index.jsx
 */

import React, { Component } from 'react';

class canvasDrawPic extends Component {
  componentDidMount() {
    let data = [
      {
        nickName: '咸蛋的蛋',
        phone: 0,
        corpusPlayer: 0,
        picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      },
      {
        nickName: '空有我葬',
        phone: 42200,
        corpusPlayer: 0,
        picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      },
      {
        nickName: '白字清欢',
        phone: 17700,
        corpusPlayer: 0,
        picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      },
      {
        nickName: '咸蛋的蛋',
        phone: 0,
        corpusPlayer: 0,
        picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      },
      {
        nickName: '空有我葬',
        phone: 42200,
        corpusPlayer: 0,
        picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      },
      {
        nickName: '白字清欢',
        phone: 17700,
        corpusPlayer: 0,
        picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      },
      {
        nickName: '咸蛋的蛋',
        phone: 0,
        corpusPlayer: 0,
        picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '1111',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '咸蛋的蛋',
      //   phone: 0,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '空有我葬',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '白字清欢',
      //   phone: 17700,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
      // {
      //   nickName: '1111',
      //   phone: 42200,
      //   corpusPlayer: 0,
      //   picUrl: 'https://oss.aircourses.com/default/portrait_adm.png',
      // },
    ];

    let canvas = this.refs.wrapEl; // 获取canvas元素
    let ctx = canvas.getContext('2d'); // 创建context对象
    let bannerW = 343; // banner图宽度
    let bannerH = 130; // banner图高度
    let columnH = 30; // 表格每格宽度
    let columnW = 80; // 表格每格高度
    let canvasW = bannerW; // canvas宽度
    let canvasH =
      bannerH + columnH * (data.length + 1) < 500 ? 500 : bannerH + columnH * (data.length + 3); // canvas高度

    canvas.width = canvasW; // 画布宽度
    canvas.height = canvasH; // 画布高度
    canvas.style.border = '1px solid #ccc'; // 画布边框样式

    // ctx.scale(2, 2); // 缩放当前绘图至更大或更小
    // ctx.lineWidth = 1; // 设置或返回当前的线条宽度
    ctx.strokeStyle = '#ccc'; // 设置或返回用于笔触的颜色、渐变或模式(表格线颜色)
    ctx.textAlign = 'center'; // 设置或返回文本内容的当前对齐方式
    ctx.font = 'normal normal 12px Arial';

    // 绘制banner图
    let bannelEl = new Image();
    bannelEl.src =
      'http://ac-dev.oss-accelerate.aliyuncs.com/20200724/ca2d1447-0c2d-4fb4-b694-b5d7c3436220.png';
    ctx.drawImage(bannelEl, 0, 0, bannerW, bannerH); // 向画布上绘制图像、画布或视频

    let textHeight = columnH / 1.5;
    // 绘制榜单生成时间
    ctx.fillStyle = '#eee'; // 填充色
    ctx.fillRect(0, bannerH, canvasW, columnH); // fillRect() 方法绘制“已填色”的矩形。默认的填充颜色是黑色。
    ctx.fillStyle = '#000000'; // 设置或返回用于填充绘画的颜色、渐变或模式
    ctx.fillText('榜单生成时间： 08/11 19:20:11', canvasW / 2, bannerH + textHeight); // context.fillText(text,x,y,maxWidth);

    // 绘制表头
    ctx.fillStyle = '#e3e3e3'; // 填充色
    ctx.fillRect(0, bannerH + columnH, canvasW, columnH); // fillRect() context.fillRect(x,y,width,height);。
    ctx.fillStyle = '#000000'; // 设置或返回用于填充绘画的颜色、渐变或模式
    ctx.fillText('姓名', columnW, bannerH + columnH + textHeight); // 在画布上绘制“被填充的”文本  context.fillText(text,x,y,maxWidth);
    ctx.fillText('手机尾号', columnW * 2, bannerH + columnH + textHeight);
    ctx.fillText('出席天数', columnW * 3, bannerH + columnH + textHeight);

    // 绘制表格内容
    ctx.fillStyle = '#ffffff'; // 填充色
    ctx.fillRect(0, bannerH + columnH * 2, canvasW, canvasH - bannerH - columnH * 2); // fillRect() context.fillRect(x,y,width,height);。
    for (let i = 0; i < data.length; i++) {
      let bgImg = new Image();
      bgImg.src = data[i].picUrl;
      ctx.drawImage(bgImg, 20, bannerH + columnH * (i + 2) + columnH / 4, 15, 15); // 向画布上绘制图像、画布或视频

      ctx.fillStyle = '#000000';
      ctx.fillText(data[i].nickName, columnW, bannerH + columnH * (i + 2) + textHeight);
      ctx.fillText(data[i].phone, columnW * 2, bannerH + columnH * (i + 2) + textHeight);
      //   ctx.fillStyle = '#ff0000';
      ctx.fillText(data[i].corpusPlayer, columnW * 3, bannerH + columnH * (i + 2) + textHeight);
      //   ctx.fillStyle = '#006fff';
    }

    // 画表格线
    for (let i = 0; i < data.length + 2; i++) {
      // ctx.moveTo(columnW * i, 0);
      // ctx.lineTo(columnW * i, canvas.height);
      // ctx.moveTo(0, columnH * i);
      // ctx.lineTo(canvas.width, columnH * i);
      // ctx.stroke();
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.wrapEl = React.createRef();
  }

  render() {
    return (
      <>
        <canvas ref="wrapEl">canvas绘图</canvas>
      </>
    );
  }
}

export default canvasDrawPic;
