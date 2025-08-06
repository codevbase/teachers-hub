-- CreateTable
CREATE TABLE "public"."Usr" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usr_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usr_email_key" ON "public"."Usr"("email");
