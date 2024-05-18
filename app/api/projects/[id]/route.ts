import { NextRequest, NextResponse } from 'next/server';

import connect from '../../../../utils/db';
import Project from '../../../../models/Project';

export async function GET(req: NextRequest) {
  try {
    await connect();

    const body = await req.json();

    const project = await Project.findById(body._id);

    return NextResponse.json(project, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }) {
  try {
    await connect();

    const { id } = params;

    const project = await Project.findByIdAndDelete(id);

    return NextResponse.json(project, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
