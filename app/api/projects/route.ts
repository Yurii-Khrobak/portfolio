import { NextRequest, NextResponse } from 'next/server';

import connect from '@/utils/db';
import Project from '@/models/Project';

export async function GET(req: NextRequest) {
  try {
    await connect();

    const projects = await Project.find();

    return NextResponse.json(projects, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connect();

    const body = await req.json();

    const project = await Project.create(body);

    return NextResponse.json(project, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connect();

    const body = await req.json();

    if(!body._id) {
      return NextResponse.json({ error: 'Id is not specified' }, { status: 500 });
    }

    const updatedProject = await Project.findByIdAndUpdate(body._id, body, { new: true });

    return NextResponse.json(updatedProject, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
