"use client";
import { deleteFromCart } from "@/db/deleteFromCart";
import { X } from "lucide-react";
import React from "react";

export default function DeleteItemButton({ item, userId }) {
	return <X className='cursor-pointer' color='red' onClick={() => deleteFromCart(item, userId)} />;
}
