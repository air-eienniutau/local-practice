<?php
//tags01.php

function today()
{
  $today = new DateTime();

  return $today->format('Y-m-d');
}

$todoList = [
  '09:00' => '调试项目1的代码',
  '14:00' => '完成项目2的 UML 制图',
  '17:00' => '下班去买菜',
];

require_once 'tags01_view.php';