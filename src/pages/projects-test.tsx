"use client"

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@mui/material"
import { DialogTitle } from "@radix-ui/react-dialog"

type ProjectCardProps = {
  title: string
  description: string
  imageUrl: string
}

export function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        {/* <button onClick={() => setOpen(true)} className="relative w-full rounded-lg overflow-hidden group focus:outline-none">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={250}
            className="object-cover w-full h-64 transition duration-300 group-hover:brightness-75 rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-white text-xl font-bold drop-shadow-md">{title}</h3>
          </div>
        </button> */}
          Clica ai troxa
      </DialogTrigger>

      <DialogContent className="max-w-xl bg-background p-6 rounded-xl shadow-xl">
      <AnimatePresence>
        <DialogTitle>{title}</DialogTitle>
        {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={350}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-muted-foreground">{description}</p>
            </motion.div>
        )}
      </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
